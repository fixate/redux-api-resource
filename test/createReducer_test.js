import test from 'tape';
import { spy } from 'sinon';
import createReducer from '../src/createReducer';
import createActions from '../src/createActions';

test('Resource Reducer', (context) => {
  context.test('defaults', (t) => {
    const extraReducer = spy(s => s);
    const reducer = createReducer({ name: 'myNS', reducer: extraReducer, resultReducers: {} });
    const actions = createActions({ name: 'myNS' });
    let state;

    state = reducer(undefined, {});
    t.deepEquals(
      state, {
        entity: undefined,
        hasLoaded: false,
        isBusy: false,
        isCreating: false,
        isFinding: false,
        isGetting: false,
        isPatching: false,
        isRemoving: false,
        isUpdating: false,
        items: [],
      },
      'Correct initial state'
    );

    state = reducer({ items: [{ a: 1 }], isBusy: true }, actions.reset());
    t.deepEquals(state.items, [], 'reset -> Resets items');
    t.false(state.isBusy, 'reset -> isBusy is false');

    state = reducer(
      {
        items: [{ a: 1 }],
      },
      actions.findReceive([{ b: 1 }])
    );
    t.deepEquals(state.items, [{ b: 1 }], 'find -> Sets items');
    t.false(state.isBusy, 'find -> isLoading is false');
    t.false(state.isFinding, 'find -> isFinding is false');

    state = reducer({ isBusy: true, isCreating: true, entity: 'dummy' }, actions.createReceive({ b: 2 }));
    t.deepEquals(state.entity, { b: 2 }, 'create -> updates entity');
    t.false(state.isBusy, 'create -> isBusy false');
    t.false(state.isCreating, 'create -> isCreating false');

    state = reducer({ isBusy: true, isUpdating: true, entity: 'dummy' }, actions.updateReceive({ _id: 1, b: 2 }));
    t.deepEquals(state.entity, { _id: 1, b: 2 }, 'update -> sets entity');
    t.false(state.isBusy, 'update -> isBusy false');
    t.false(state.isUpdating, 'update -> isUpdating false');

    state = reducer({ isBusy: true, isPatching: true, entity: 'dummy' }, actions.patchReceive({ _id: 1, b: 2 }));
    t.deepEquals(state.entity, { _id: 1, b: 2 }, 'patch -> sets entity');
    t.false(state.isBusy, 'patch -> isBusy false');
    t.false(state.isUpdating, 'patch -> isUpdating false');

    state = reducer({ isBusy: true, isRemoving: true, entity: 'dummy' }, actions.removeReceive({ _id: 1 }));
    t.deepEquals(state.entity, { _id: 1 }, 'remove -> sets entity');
    t.false(state.isBusy, 'remove -> isBusy false');
    t.false(state.isRemoving, 'remove -> isRemoving false');

    t.end();
  });


  context.test('with result reducers', (t) => {
    const find = spy((s, a) =>
      Object.assign(s, { items: s.items.concat(a.result).concat({ c: 1 }) })
    );
    const reducer = createReducer({ name: 'myNS', reducer: s => s, resultReducers: { find } });
    const actions = createActions({ name: 'myNS' });
    let state;

    state = reducer(
      {
        items: [{ a: 1 }],
      },
      actions.findReceive([{ b: 1 }])
    );
    t.deepEquals(state.items, [{ a: 1}, { b: 1 }, { c: 1 }], 'find -> Sets items');
    t.ok(find.called, 'Find reducer called');

    t.end();
  });
});

