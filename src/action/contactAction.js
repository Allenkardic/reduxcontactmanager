import {
  GET_CONTACT,
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT
} from "../action/type";

import axios from "axios";

export const getContacts = () => (dispatch) => {
  axios.get("http://jsonplaceholder.typicode.com/users").then((response) =>
    dispatch({
      type: GET_CONTACTS,
      payload: response.data
    })
  );
};

export const getContact = (id) => (dispatch) => {
  axios
    .get(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) =>
      dispatch({
        type: GET_CONTACT,
        payload: response.data
      })
    );
};

export const deleteContact = (id) => (dispatch) => {
  axios
    .delete(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) =>
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      })
    );
};

export const addContact = (newContact) => (dispatch) => {
  axios
    .post("http://jsonplaceholder.typicode.com/users", newContact)
    .then((response) =>
      dispatch({
        type: ADD_CONTACT,
        payload: response.data
      })
    );
};

export const updateContact = (item) => (dispatch) => {
  axios
    .put(`http://jsonplaceholder.typicode.com/users/${item.id}`, item)
    .then((response) =>
      dispatch({
        type: UPDATE_CONTACT,
        payload: response.data
      })
    );
};
