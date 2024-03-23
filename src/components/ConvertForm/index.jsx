import React from 'react'

function index() {
  return (
    <div className="row">
        <div className="columns-1 my-5">
            <form action="" className='mx-auto w-1/2'>
            <div className='my-3'>
                <label htmlFor="youtube_url" className='text-xl font-bold mr-4 d-block'>Youtube URL</label>
                <input type="text" id="youtube_url" className='form-input w-full' placeholder='Enter youtube url here.' required/>
            </div>
            
            <div className='my-3'>
                <input type="submit" id="submit" value="Convert" className="border rounded bg-sky-600 text-light-emphasis py-2 px-3"/>
            </div>
            </form>
        </div>
    </div>
  )
}

export default index