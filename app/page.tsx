'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function HomePage() {
    const [song_name, setSong] = useState('')
    const [song_artist, setArtist] = useState('')
    const [requester, setRequester] = useState('')

    const router = useRouter();

    async function request() {
        try {
            await fetch('http://api.songrequests.tk/api/collections/requests/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    song_name,
                    song_artist,
                    requester,
                })
            })
        } catch (err) {
            console.error(err);
            throw err;
        }

        setSong('');
        setArtist('');
        setRequester('')

        router.refresh();
    }

    return (
        <div>
            <h2>Request a Song!</h2>
                <form className='i-container' onSubmit={request}>
                    <input type="text" placeholder='Song' value={song_name} onChange={(e) => setSong(e.target.value)} />
                    <input type='text' placeholder='Artist' value={song_artist} onChange={(e) => setArtist(e.target.value)} />
                    <input type='text' placeholder='Your Name' value={requester} onChange={(e) => setRequester(e.target.value)} />

                    <button type='submit'>
                        Request
                    </button>
                </form>
        </div>
    );
}
