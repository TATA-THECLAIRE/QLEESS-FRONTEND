import React from 'react';

const colors = [
   'bg-blue-500',
   'bg-green-500',
   'bg-purple-500',
   'bg-pink-500',
   'bg-yellow-500',
   'bg-red-500',
   'bg-magenta-500'
   
];

export default function FAQ() {
   return (
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
         <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
         {[
            {
               question: "What is FLASHQ?",
               answer: "FLASHQ is a website where you can save your valuable time by joining a virtual queue and getting notified when it's your turn for a service that typically requires standing in physical lines."
            },
            {
               question: "Can I see the current queue?",
               answer: "Yes, you can see the queue in real-time. You can usually view the current position in the queue, the estimated wait time, and sometimes even the number of people ahead of you."
            },
            {
               question: "How do I join the queue?",
               answer: "Joining the queue is usually straightforward. You'll typically need to select the service you want, provide some basic information (like your name or phone number), and then you'll be added to the queue."
            },
            {
               question: "What if I need to leave the queue?",
               answer: "Most queueing systems allow you to leave the queue. You might need to provide a reason (e.g., \"I need to leave temporarily\") and you may be able to rejoin the queue later."
            },
            {
               question: "How am I notified when it's my turn?",
               answer: "You'll usually be notified through a combination of methods: push notifications on your mobile device, text messages (SMS) to your phone, email alerts, and in-app notifications if you're using a mobile app."
            },
            {
               question: "Is FLASHQ free to use?",
               answer: "The cost of using FLASHQ can vary depending on the specific service and the provider. Some services may be free, while others may charge a small fee."
            },
            {
               question: "Is FLASHQ easy to use?",
               answer: "yes FLASHQ is very easy to use the ui is simple and intuitive ."
            },
            {
               question: "Is FLASHQ easy to use?",
               answer: "yes FLASHQ is very easy to use the ui is simple and intuitive ."
            }

         ].map((item, index) => (
            <details key={index} className={`group rounded-lg ${colors[index]} shadow-lg transition-all duration-300 hover:shadow-xl`}>
               <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-white">
                  <h2 className="font-semibold text-xl">{item.question}</h2>
                  <span className="relative size-6 shrink-0">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-6 opacity-100 group-open:opacity-0 transition-opacity duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                     </svg>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 size-6 opacity-0 group-open:opacity-100 transition-opacity duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </span>
               </summary>
               <div className="bg-white p-6 rounded-b-lg">
                  <p className="leading-relaxed text-gray-700">{item.answer}</p>
               </div>
            </details>
         ))}
      </div>
   );
}