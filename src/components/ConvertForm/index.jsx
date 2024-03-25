import React, {useState} from 'react';

function Index({handleBtn}) {

  const [url, setUrl] = useState('');
  const youtubeCheck = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/watch\?v=([^&]+)/m;

  const converter = (e) => {
    e.preventDefault();
    const errors = [];
    if(url.trim().length === 0){
      errors.push('Please enter url');
    }else if(!url.match(youtubeCheck)){
      errors.push('Please enter valid youtube url');
    }

    // validate url input is valid youtube video url 

    if(errors.length === 0){
      // next()
      handleBtn(url);
      return true;
    }else{
      // error occured.
      console.error('Error : ', errors);
      return false;
    }

    // end 

    // handleBtn(obj);
  }

  return (
    <div className="row">
        <div className="columns-1 my-5">
            <form action="/convert" className='mx-auto w-1/2'>
            <div className='my-3'>
                <label htmlFor="url" className='text-xl font-bold mr-4 d-block'>Youtube URL</label>
                <input type="text" id="url" className='form-input w-full' value={url} placeholder='Enter youtube url here.' onChange={e => setUrl(e.target.value)} required/>
            </div>
            
            <div className='my-3'>
                <input type="submit" id="submit" value="Convert" className="border rounded bg-sky-600 text-zinc-100 py-2 px-3" onClick={e => converter(e)}/>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Index