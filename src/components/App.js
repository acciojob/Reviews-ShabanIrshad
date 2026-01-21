import React from 'react';
import Review from './Review';
import { useState } from 'react';


const App=()=>{
     const review=[
        {
            id: 1,
            name: 'susan smith',
            job: 'web developer',
            image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
            id: 2,
            name: 'anna johnson',
            job: 'web designer',
            image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
            text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
        },
        {
            id: 3,
            name: 'peter jones',
            job: 'intern',
            image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
        },
        {
            id: 4,
            name: 'bill anderson',
            job: 'the boss',
            image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
        },
    ];
 
    const [rev,setRev]=useState(review[0]);

    const handleNext=(id)=>{
        console.log('next',id);

        let res=review.find((rew)=>rew.id===id+1);
        if(res){
            setRev(res);
        }else{
            return;
        }
        
       
    }
    const handlePrev=(id)=>{
        console.log('prev',id);
        let res=review.find((rew)=>rew.id===id-1);
         if(res){
            setRev(res);
        }else{
            return;
        }

    }
    const handleRandom=()=>{
       let ind=(Math.floor(Math.random() * (review.length - 1 + 1)) + 1);
       setRev(review[ind]);



    }

    return(
        <>
            <main>
                <section className='container'>
                    <h1 id='review-heading'>Our Reviews</h1>
                    <Review review={rev} handleNext={handleNext} handlePrev={handlePrev} handleRandom={handleRandom}/>
                </section>
            </main>
        </>
    );
    
}
export default App;