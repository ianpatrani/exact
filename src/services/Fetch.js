import React from 'react';

const URL = 'https://telecom.exactian.info/ws2/segfi/users/Login'

const PETITION = {
    method: 'POST',
    body: "response"
}

fetch(URL, PETITION)
    .then(response => response.json())
    .then(data => console.log(data))