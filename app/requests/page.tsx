import React from 'react'

async function getRequests() {
    const res = await fetch("http://api.songrequests.tk/api/collections/requests/records?page=1&perPage=30", {cache: 'no-cache'});
    const data = await res.json()
    return data?.items as any[];
}


export default async function RequestPage () {
const requests = await getRequests();
    return (
        <div>
            <h1>Song Requests</h1>
            {/* <div className={req.TitleContainer}> */}
            {/*     <h5>Song</h5> */}
            {/*     <h5>Artist</h5> */}
            {/*     <h5>Requester</h5> */}
            {/* </div> */}
            <table>
                <tbody>
                <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Requester</th>
                </tr>
                {requests?.map((request) => {
                    return <Request key={request.id} request={request} />;
                })}
                </tbody>
            </table>
        </div>
    );
}

function Request({request}: any) {
    const {song_name, song_artist, requester} = request || {};

    return (
        // <div className={req.Container}>
        //     <h5>{song_name}</h5>
        //     <h5>{song_artist}</h5>
        //     <h5>{requester}</h5>
        // </div> 
        /* <div> */
        <tr>
            <td>{song_name}</td>
            <td>{song_artist}</td>
            <td>{requester}</td>
        </tr>
        // </div>
    )
}
