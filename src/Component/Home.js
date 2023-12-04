// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.css'; 
// import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

// function Home() {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     fetchRandomImage('nature'); // Fetch a random image on component mount
//   }, []);

//   const fetchRandomImage = (category) => {
//     const apiKey = '1xy1iam6bMHCH1ZjfHxAeA==FB604hKBd2k1Izs7';

//     fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
//       method: 'GET',
//       headers: {
//         'X-Api-Key': apiKey,
//         'Accept': 'image/jpg',
//       },
//     }).then(response => {
//       return response.blob();
//     })
//     .then(result => {
//       const imageUrl = URL.createObjectURL(result);
//       setImage(imageUrl);
// console.log(imageUrl)
//       // Dynamically update meta tags
//       document.querySelector('meta[property="og:image"]').setAttribute('content', imageUrl);
//       document.querySelector('meta[name="twitter:image"]').setAttribute('content', imageUrl);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const category = document.getElementById("input").value; 
//     fetchRandomImage(category);
//   }

// //   const getCurrentImageUrl = () => {
// //     return window.location.origin + '/image/' + image; // Modify the URL structure as needed
// //   }

// let urlIs="https://enchanting-crisp-36d51a.netlify.app/"

//   return (
//     <div>
//         <h3>Random Image Generator</h3>
//       {image ? (
//         <img
//           id="image"
//           alt="randomImage"
//           style={{ width: '250px', height: '250px' }}
//           src={image}
//         />
//       ) : (
//         <FontAwesomeIcon icon={faSpinner} spin size="10x" />
//       )}
//       <br />
//       <form onSubmit={handleSubmit}>
//         <input name="search" id="input" type="text"></input>
//         <button type="submit" id="submit">Submit</button>
//       </form>
//       <FacebookShareButton
//         // url={getCurrentImageUrl()}
//         url={urlIs}
//         quote="Random Image Generatorsss"
//         hashtag="#RandomImage"
//       >
//         <button>Share on Facebook</button>
//       </FacebookShareButton>

//       <TwitterShareButton
//         // url={getCurrentImageUrl()}
//         url={urlIs}
//         title="Random Image Generator"
//         hashtags={['#RandomImage']}
//       >
//         <button>Share on Twitter</button>
//       </TwitterShareButton>

//       <WhatsappShareButton
//         // url={()=>
//         //     {
//         //         console.log(getCurrentImageUrl())
//         //         getCurrentImageUrl()
//         //     }}
//         url={urlIs}
//         title="Random Image Generator"
//       >
//         <button>Share on Whatsapp</button>
//       </WhatsappShareButton>
//     </div>
//   );
// }

// export default Home;






// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.css'; 
// import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

// function Home() {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     fetchRandomImage('nature'); // Fetch a random image on component mount
//   }, []);

//   const fetchRandomImage = (category) => {
//     const apiKey = '1xy1iam6bMHCH1ZjfHxAeA==FB604hKBd2k1Izs7';

//     fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
//       method: 'GET',
//       headers: {
//         'X-Api-Key': apiKey,
//         'Accept': 'image/jpg',
//       },
//     }).then(response => response.blob())
//       .then(blob => {
//         const reader = new FileReader();
//         reader.onload = () => {
//           const imageUrl = reader.result;
//           setImage(imageUrl);
// console.log(imageUrl)
//           // Dynamically update meta tags
//           document.querySelector('meta[property="og:image"]').setAttribute('content', imageUrl);
//           document.querySelector('meta[name="twitter:image"]').setAttribute('content', imageUrl);
//         };
//         reader.readAsDataURL(blob);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const category = document.getElementById("input").value; 
//     fetchRandomImage(category);
//   }

//   let urlIs = "https://enchanting-crisp-36d51a.netlify.app/";

//   return (
//     <div>
//       <h3>Random Image Generator</h3>
//       {image ? (
//         <img
//           id="image"
//           alt="randomImage"
//           style={{ width: '250px', height: '250px' }}
//           src={image}
//         />
//       ) : (
//         <FontAwesomeIcon icon={faSpinner} spin size="10x" />
//       )}
//       <br />
//       <form onSubmit={handleSubmit}>
//         <input name="search" id="input" type="text"></input>
//         <button type="submit" id="submit">Submit</button>
//       </form>
//       <FacebookShareButton
//         url={urlIs}
//         quote="Random Image Generatorsss"
//         hashtag="#RandomImage"
//       >
//         <button>Share on Facebook</button>
//       </FacebookShareButton>

//       <TwitterShareButton
//         url={urlIs}
//         title="Random Image Generator"
//         hashtags={['#RandomImage']}
//       >
//         <button>Share on Twitter</button>
//       </TwitterShareButton>

//       <WhatsappShareButton
//         url={urlIs}
//         title="Random Image Generator"
//       >
//         <button>Share on Whatsapp</button>
//       </WhatsappShareButton>
//     </div>
//   );
// }

// export default Home;


























































import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css'; 
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

function Home() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchRandomImage('nature'); // Fetch a random image on component mount
  }, []);

  const fetchRandomImage = (category) => {
    const apiKey = '1xy1iam6bMHCH1ZjfHxAeA==FB604hKBd2k1Izs7';

    fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Accept': 'image/jpg',
      },
    }).then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result;
          setImage(imageUrl);

          // Dynamically update meta tags
          const ogImageMeta = document.querySelector('meta[property="og:image"]');
          const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
          
          if (ogImageMeta) {
            ogImageMeta.setAttribute('content', imageUrl);
          }
          
          if (twitterImageMeta) {
            twitterImageMeta.setAttribute('content', imageUrl);
          }
        };
        reader.readAsDataURL(blob);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = document.getElementById("input").value; 
    fetchRandomImage(category);
  }

  let urlIs = "https://enchanting-crisp-36d51a.netlify.app/";

  return (
    <div>
      <h3>Random Image Generator</h3>
      {image ? (
        <img
          id="image"
          alt="randomImage"
          style={{ width: '250px', height: '250px' }}
          src={image}
        />
      ) : (
        <FontAwesomeIcon icon={faSpinner} spin size="10x" />
      )}
      <br />
      <form onSubmit={handleSubmit}>
        <input name="search" id="input" type="text"></input>
        <button type="submit" id="submit">Submit</button>
      </form>
      <FacebookShareButton
        url={urlIs}
        quote="Random Image Generatorsss"
        hashtag="#RandomImage"
      >
        <button>Share on Facebook</button>
      </FacebookShareButton>

      <TwitterShareButton
        url={urlIs}
        title="Random Image Generator"
        hashtags={['#RandomImage']}
      >
        <button>Share on Twitter</button>
      </TwitterShareButton>

      <WhatsappShareButton
        url={urlIs}
        title="Random Image Generator"
      >
        <button>Share on Whatsapp</button>
      </WhatsappShareButton>
    </div>
  );
}

export default Home;
