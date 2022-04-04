export const getMapData = (data) => dispatch => {
    try {
        dispatch({ type: 'GET_MAP_DATA', data })
    } catch (err) {
        console.log(err);
    }
}

export const removeMapData = (data) => dispatch => {
    try {
        dispatch({ type: 'REMOVE_MAP_DATA', data })
    } catch (err) {
        console.log(err);
    }
}
