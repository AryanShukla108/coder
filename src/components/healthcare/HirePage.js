import React from 'react'
import boy from "../../assests/boy.png"
import boy1 from "../../assests/boy2.png"
import girl from "../../assests/girl.png"
import girl1 from "../../assests/girl2.png"
import ReactStars from 'react-stars'


const HirePage = () => {

    const cardData = [
        {
            name: 'Shreya',
            title: 'Sr. Java Developer',
            rate: '$34',
            rating: 4.2,
            skills: 'Java - 6 Years (Advance) |React.js | Healthcare',
            image: girl,
        },
        {
            name: 'Nitish',
            title: 'Sr. Python Developer',
            rate: '$42',
            rating: 5,
            skills: 'Python - 8 Years (Expert) | Android | Healthcare ',
            image: boy,

        }, {
            name: 'Nikita',
            title: 'Sr. PHP Developer',
            rate: '$24',
            rating: 4.3,
            skills: 'PHP - 12 Years (Expert) |Healthcare',
            image: girl1,

        }, {
            name: 'Raj',
            title: 'Sr. Java Developer',
            rate: '$64',
            rating: 4.7,
            skills: 'Java - 8 Years (Expert) | React.js| Healthcare',
            image: boy1,

        },
        {
            name: 'Ashish',
            title: 'Sr. PHP Developer',
            rate: '$50',
            rating: 5,
            skills: 'PHP - 5 Years (Advance) |Healthcare',
            image: boy,
        },
        {
            name: 'Vinita',
            title: 'Sr. Java Developer',
            rate: '$19',
            rating: 4.8,
            skills: 'Java - 2 Years (Junior)|Healthcare',
            image: girl,

        }, {
            name: 'Manik',
            title: 'Sr. Java Developer',
            rate: '$55',
            rating: 4.8,
            skills: 'Java - 6 Years (Advance) |React.js | Healthcare',
            image: boy1,

        }, {
            name: 'Megha',
            title: 'Sr. Python Developer',
            rate: '$14',
            rating: 4.8,
            skills: 'Python - 12 Years (Expert) |Flutter | React.js | Healthcare',
            image: girl1,

        },
    ]
    return (
        <div className='HirePage'>
            <div className='heading-main'>Explore Talent on Our <span className='heading-color'>Platform</span></div>
            <div className='HirePage-card'>
                {cardData.map((data, index) => (
                    <div className='hireCard' key={index}>
                        <img src={data.image} alt={data.name} className='img-card' />
                        <div className='name'>{data.name}</div>
                        <div className='title'>{data.title}</div>
                        <div className='pay'>
                            <div className='filled txt-1'><svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_93_1001)">
<g clip-path="url(#clip1_93_1001)">
<path d="M15.4961 11.4229L11.4641 9.93853L9.97964 5.90337C9.89174 5.66457 9.7327 5.45847 9.52399 5.31289C9.31527 5.16731 9.06693 5.08926 8.81245 5.08926C8.55798 5.08926 8.30964 5.16731 8.10092 5.31289C7.89221 5.45847 7.73317 5.66457 7.64527 5.90337L6.15933 9.93384L2.12417 11.4182C1.88537 11.5061 1.67927 11.6652 1.53369 11.8739C1.38812 12.0826 1.31006 12.3309 1.31006 12.5854C1.31006 12.8399 1.38812 13.0882 1.53369 13.2969C1.67927 13.5057 1.88537 13.6647 2.12417 13.7526L6.15386 15.2463L7.63824 19.2792C7.72614 19.518 7.88518 19.7241 8.09389 19.8696C8.30261 20.0152 8.55095 20.0933 8.80542 20.0933C9.05989 20.0933 9.30824 20.0152 9.51695 19.8696C9.72567 19.7241 9.88471 19.518 9.97261 19.2792L11.457 15.2471L15.4922 13.7628C15.731 13.6749 15.9371 13.5158 16.0827 13.3071C16.2282 13.0984 16.3063 12.85 16.3063 12.5956C16.3063 12.3411 16.2282 12.0928 16.0827 11.884C15.9371 11.6753 15.731 11.5163 15.4922 11.4284L15.4961 11.4229ZM11.0281 14.0745C10.8592 14.1365 10.7058 14.2345 10.5786 14.3617C10.4514 14.4889 10.3534 14.6423 10.2914 14.8112L8.80699 18.8315L7.32574 14.8081C7.2637 14.6401 7.166 14.4875 7.03936 14.3609C6.91272 14.2342 6.76015 14.1365 6.59214 14.0745L2.57183 12.5901L6.59214 11.1057C6.76015 11.0437 6.91272 10.946 7.03936 10.8193C7.166 10.6927 7.2637 10.5401 7.32574 10.3721L8.81011 6.35181L10.2945 10.3721C10.3565 10.541 10.4545 10.6944 10.5817 10.8216C10.709 10.9488 10.8623 11.0469 11.0312 11.1088L15.0516 12.5932L11.0281 14.0745ZM11.3102 4.46509C11.3102 4.29933 11.376 4.14036 11.4932 4.02315C11.6104 3.90594 11.7694 3.84009 11.9352 3.84009H13.1852V2.59009C13.1852 2.42433 13.251 2.26536 13.3682 2.14815C13.4854 2.03094 13.6444 1.96509 13.8102 1.96509C13.9759 1.96509 14.1349 2.03094 14.2521 2.14815C14.3693 2.26536 14.4352 2.42433 14.4352 2.59009V3.84009H15.6852C15.8509 3.84009 16.0099 3.90594 16.1271 4.02315C16.2443 4.14036 16.3102 4.29933 16.3102 4.46509C16.3102 4.63085 16.2443 4.78982 16.1271 4.90703C16.0099 5.02424 15.8509 5.09009 15.6852 5.09009H14.4352V6.34009C14.4352 6.50585 14.3693 6.66482 14.2521 6.78203C14.1349 6.89924 13.9759 6.96509 13.8102 6.96509C13.6444 6.96509 13.4854 6.89924 13.3682 6.78203C13.251 6.66482 13.1852 6.50585 13.1852 6.34009V5.09009H11.9352C11.7694 5.09009 11.6104 5.02424 11.4932 4.90703C11.376 4.78982 11.3102 4.63085 11.3102 4.46509ZM19.4352 8.21509C19.4352 8.38085 19.3693 8.53982 19.2521 8.65703C19.1349 8.77424 18.9759 8.84009 18.8102 8.84009H18.1852V9.46509C18.1852 9.63085 18.1193 9.78982 18.0021 9.90703C17.8849 10.0242 17.7259 10.0901 17.5602 10.0901C17.3944 10.0901 17.2354 10.0242 17.1182 9.90703C17.001 9.78982 16.9352 9.63085 16.9352 9.46509V8.84009H16.3102C16.1444 8.84009 15.9854 8.77424 15.8682 8.65703C15.751 8.53982 15.6852 8.38085 15.6852 8.21509C15.6852 8.04933 15.751 7.89036 15.8682 7.77315C15.9854 7.65594 16.1444 7.59009 16.3102 7.59009H16.9352V6.96509C16.9352 6.79933 17.001 6.64036 17.1182 6.52315C17.2354 6.40594 17.3944 6.34009 17.5602 6.34009C17.7259 6.34009 17.8849 6.40594 18.0021 6.52315C18.1193 6.64036 18.1852 6.79933 18.1852 6.96509V7.59009H18.8102C18.9759 7.59009 19.1349 7.65594 19.2521 7.77315C19.3693 7.89036 19.4352 8.04933 19.4352 8.21509Z" fill="#EA4232"/>
</g>
</g>
<defs>
<clipPath id="clip0_93_1001">
<rect width="25" height="21" fill="white" transform="translate(0.0600586 0.590088)"/>
</clipPath>
<clipPath id="clip1_93_1001">
<rect width="25" height="21" fill="white" transform="translate(0.0600586 0.590088)"/>
</clipPath>
</defs>
</svg>
 Super <span>Dev</span></div>
                            <div className='filled txt-2'><span className='rate'>{data.rate}</span>/hour</div>
                        </div>
                        <div className='filled space-bott d-flex align-items-center'>
                           <ReactStars 
                            count={5}
                            value={data.rating}
                            half={true}
                            size={24}
                color2="#FFD700"
                edit={false} 
                className='stars'
                           />
                            <span className='rate'> {data.rating}</span>
                        </div>
                        <div className='skills'>{data.skills}</div>
                        <button className='hire-btn' onClick={() => (window.location.href = '/hire')}>Hire Now</button>
                    </div>
                ))}
            </div>
            <button className='health-submit' onClick={() => (window.location.href = '/hire')}>Schedule a call</button>
        </div>
    )
}

export default HirePage