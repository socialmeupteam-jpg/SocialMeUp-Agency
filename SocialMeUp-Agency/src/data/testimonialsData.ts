import preetAvatar from "../assets/images/testimonials/preet.jpg";
import deepakAvatar from "../assets/images/testimonials/deepak.jpg";
import gamingAvatar from "../assets/images/testimonials/gaming-howl.jpg";
import anandAvatar from "../assets/images/testimonials/anand.jpg";
import ranaAvatar from "../assets/images/testimonials/rana.jpg";
import shivamAvatar from "../assets/images/testimonials/shivam.jpg";
import ashishAvatar from "../assets/images/testimonials/ashish.jpg";
import shreyaAvatar from "../assets/images/testimonials/shreya.jpg";
export interface Testimonial {
    id: number;
    name: string;
    avatar: string;
    review: string;
    rating: number;
    source: "Google";
    time: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Preet",
        avatar: preetAvatar,
        rating: 5,
        source: "Google",
        time: "1 year ago",
        review:
            "I joined the digital marketing course with Prashant Sir and it was one of the best decisions. The course was detailed, practical, and very well structured. I learned so much from basics to advanced strategies. The value I received was far beyond the course fee. Highly recommended for anyone who wants to truly understand digital marketing.",
    },
    {
        id: 2,
        name: "Deepak Singh",
        avatar: deepakAvatar,
        rating: 5,
        source: "Google",
        time: "1 year ago",
        review:
            "Best team doing great work. They put in excellent effort and always maintain a strong relationship with their clients.",
    },
    {
        id: 3,
        name: "GAMING HOWL",
        avatar: gamingAvatar,
        rating: 5,
        source: "Google",
        time: "1 year ago",
        review:
            "Amazing support and easy communication. Really professional work with a highly competent team. You can rely on them for your business growth.",
    },
    {
        id: 4,
        name: "Anand Pratap",
        avatar: anandAvatar,
        rating: 5,
        source: "Google",
        time: "1 year ago",
        review:
            "A great team of experts. Punctuality and success are the key strengths of SocialMeUp. They respond quickly and deliver digital solutions professionally. Highly recommended.",
    },
    {
        id: 5,
        name: "Rana Singh",
        avatar: ranaAvatar,
        rating: 5,
        source: "Google",
        time: "1 year ago",
        review:
            "Excellent service and the staff's behaviour is outstanding. Quality, experience and creativity are all top-notch.",
    },
    {
        id: 6,
        name: "SHIVAM OMAR",
        avatar: shivamAvatar,
        rating: 5,
        source: "Google",
        time: "1 year ago",
        review:
            "Great services offered by SocialMeUp. Their team is dedicated, professional and delivers excellent results on time.",
    },
    {
        id: 7,
        name: "Ashish Shukla",
        avatar: ashishAvatar,
        rating: 5,
        source: "Google",
        time: "1 year ago",
        review:
            "Best Digital Marketing Agency in Lucknow. I got my company's social media and Google Ads managed by SocialMeUp and the results were amazing. Their team works strategically and professionally.",
    },
    {
        id: 8,
        name: "Shreya Singh",
        avatar: shreyaAvatar,
        rating: 5,
        source: "Google",
        time: "1 year ago",
        review:
            "Excellent experience. Highly satisfied with the professionalism, support and overall service.",
    },
];

export default testimonials;