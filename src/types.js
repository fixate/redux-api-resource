export const RESOURCE_RESET = '@resource/RESET';

export const RESOURCE_FIND_REQUEST = '@resource/FIND';
export const RESOURCE_FIND_SUCCESS = '@resource/FIND_SUCCESS';
export const RESOURCE_FIND_FAILURE = '@resource/FIND_FAILURE';

export const RESOURCE_GET_REQUEST = '@resource/GET';
export const RESOURCE_GET_SUCCESS = '@resource/GET_SUCCESS';
export const RESOURCE_GET_FAILURE = '@resource/GET_FAILURE';

export const RESOURCE_CREATE_REQUEST = '@resource/CREATE';
export const RESOURCE_CREATE_SUCCESS = '@resource/CREATE_SUCCESS';
export const RESOURCE_CREATE_FAILURE = '@resource/CREATE_FAILURE';

export const RESOURCE_UPDATE_REQUEST = '@resource/UPDATE';
export const RESOURCE_UPDATE_SUCCESS = '@resource/UPDATE_SUCCESS';
export const RESOURCE_UPDATE_FAILURE = '@resource/UPDATE_FAILURE';

export const RESOURCE_PATCH_REQUEST = '@resource/PATCH';
export const RESOURCE_PATCH_SUCCESS = '@resource/PATCH_SUCCESS';
export const RESOURCE_PATCH_FAILURE = '@resource/PATCH_FAILURE';

export const RESOURCE_REMOVE_REQUEST = '@resource/REMOVE';
export const RESOURCE_REMOVE_SUCCESS = '@resource/REMOVE_SUCCESS';
export const RESOURCE_REMOVE_FAILURE = '@resource/REMOVE_FAILURE';

export const requestTypes = [
  types.RESOURCE_FIND_REQUEST,
  types.RESOURCE_GET_REQUEST,
  types.RESOURCE_CREATE_REQUEST,
  types.RESOURCE_UPDATE_REQUEST,
  types.RESOURCE_PATCH_REQUEST,
  types.RESOURCE_REMOVE_REQUEST,
];

export const successTypes = [
  types.RESOURCE_FIND_SUCCESS,
  types.RESOURCE_GET_SUCCESS,
  types.RESOURCE_CREATE_SUCCESS,
  types.RESOURCE_UPDATE_SUCCESS,
  types.RESOURCE_PATCH_SUCCESS,
  types.RESOURCE_REMOVE_SUCCESS,
];

export const errorTypes = [
  types.RESOURCE_FIND_ERROR,
  types.RESOURCE_GET_ERROR,
  types.RESOURCE_CREATE_ERROR,
  types.RESOURCE_UPDATE_ERROR,
  types.RESOURCE_PATCH_ERROR,
  types.RESOURCE_REMOVE_ERROR,
];
