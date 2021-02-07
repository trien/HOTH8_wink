const pointsTable = {
    'create': 4,
    'join': 2
}
const WikiAPI = {
    url: location.hostname == 'localhost' ? 'http://localhost:8080/' : '/',

    addEvent: (data, callback) => {
        fetch(WikiAPI.url+"?route=addEvent", {
            method: "post",
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(
            (result) => {
                console.log(result);
                callback()
                WikiAPI.addPoints('create')
            }, (error) => { console.log(error);}
            )
    },

    getEvents: (callback) => {
        fetch(WikiAPI.url+"?route=getEvents")
        .then(res => res.json())
        .then(
        (result) => {
            console.log(result);
            callback(result.events)
        }, (error) => { console.log(error);}
        )
    },

    addPoints: (type, callback) => {
        fetch(WikiAPI.url+"?route=addPoints", {
            method: "post",
            body: JSON.stringify({points: pointsTable[type]}),
        })
            .then(res => res.json())
            .then(
            (result) => {
                console.log(result);
                if (callback) callback()
            }, (error) => { console.log(error);}
        )
    },

    getPoints: (callback) => {
        fetch(WikiAPI.url+"?route=getPoints")
            .then(res => res.json())
            .then(
            (result) => {
                console.log(result);
                callback(result.points)
            }, (error) => { console.log(error);}
        )
    }
    
}
export default WikiAPI