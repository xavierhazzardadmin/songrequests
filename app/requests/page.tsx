import React from 'react'
import Link from 'next/link'

async function getRequests() {
    const res = await fetch("http://api.songrequests.tk/api/collections/requests/records?page=1&perPage=30");
    const data = await res.json()
    return data?.items as any[];
}


export default async function RequestPage () {
const requests = await getRequests();
    return (
        <div>
            <h1>Song Requests</h1>
            <div>
                {requests?.map((request) => {
                    return <Request key={request.id} request={request} />;
                })}
            </div>
        </div>
    );
}

function Request({request}: any) {
    const {id, song_name, song_artist, requester} = request || {};

    return (
        <Link href={`/requests/${id}`}>
            <div>
                <h5>{song_name}</h5>
                <h5>{song_artist}</h5>
                <h5>Requested by: {requester}</h5>
            </div>
        </Link>
    )
}
