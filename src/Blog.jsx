// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blog = () => {
  
    const blogs = [
        {
          date: 'Jun 1, 2024',
          title: 'Exciting Science Fair Coming Up!',
          content: 'Get ready for our annual Science Fair happening next week! Students will have the opportunity to showcase their innovative projects and experiments. There will be interactive exhibits, live demonstrations, and special guest speakers. Don\'t miss out on this fun and educational event!',
          author: 'Admin',
          avatar: '/assets/plant.png'
        },
        {
          date: 'May 15, 2024',
          title: 'Outdoor Adventure Day!',
          content: 'Calling all adventurers! Join us for an exciting day of outdoor activities including hiking, rock climbing, and nature exploration. We\'ll be heading to the nearby national park for a day filled with fun and adventure. Don\'t forget to pack your sunscreen, water bottle, and sense of adventure!',
          author: 'Admin',
          avatar: '/assets/plant.png'
        },
        {
          date: 'Apr 28, 2024',
          title: 'Spring Festival Celebration!',
          content: 'Celebrate the arrival of spring with our annual Spring Festival! Enjoy live music, delicious food, and games for the whole family. We\'ll have a petting zoo, face painting, and egg decorating stations. It\'s sure to be a day of joy and laughter for everyone!',
          author: 'Admin',
          avatar: '/assets/plant.png'
        },
        {
          date: 'Mar 10, 2024',
          title: 'Community Garden Project Kickoff!',
          content: 'We\'re excited to announce the launch of our Community Garden Project! Students, parents, and community members are invited to join us as we transform an unused plot of land into a vibrant garden. Together, we\'ll learn about sustainable gardening practices, grow fresh produce, and foster a sense of community.',
          author: 'Admin',
          avatar: '/assets/plant.png'
        },
        {
          date: 'Feb 22, 2024',
          title: 'International Day Celebration!',
          content: 'Join us as we celebrate cultural diversity with our International Day event! Experience the sights, sounds, and flavors of different countries through music, dance, and cuisine. There will be performances, cultural displays, and interactive activities for all ages. It\'s a day to embrace and appreciate the rich tapestry of cultures in our community.',
          author: 'Admin',
          avatar: '/assets/plant.png'
        },
        {
          date: 'Jan 5, 2024',
          title: 'Winter Wonderland Party!',
          content: 'Get ready to bundle up and enjoy a day of winter fun at our Winter Wonderland Party! We\'ll have ice skating, snowman building contests, and hot cocoa stations. Don\'t forget to wear your favorite winter gear and join us for a day of frosty festivities!',
          author: 'Admin',
          avatar: '/assets/plant.png'
        },
        {
          date: 'Dec 12, 2023',
          title: 'Holiday Toy Drive!',
          content: 'Spread joy and cheer this holiday season by participating in our Holiday Toy Drive! We\'re collecting new, unwrapped toys to donate to children in need. Your generosity will help make the holidays brighter for families in our community. Let\'s come together to make a difference!',
          author: 'Admin',
          avatar: '/assets/plant.png'
        },
        {
          date: 'Nov 18, 2023',
          title: 'Fall Harvest Festival!',
          content: 'Celebrate the bounty of the season at our Fall Harvest Festival! Join us for pumpkin decorating, apple bobbing, and hayrides. We\'ll also have a farmers market featuring locally grown produce and homemade treats. It\'s a day of autumnal delights you won\'t want to miss!',
          author: 'Admin',
          avatar: '/assets/plant.png'
        }
      ];
      

  return (
    <section className='p-32 flex sm:m-0' >
        <div className='sm:block'><img src="https://img.freepik.com/free-vector/blank-banner-with-happy-kids_1308-36613.jpg?t=st=1714204742~exp=1714208342~hmac=4a6f4eaa2d7fd2f6f5287519639a31749644eb018398b69b3abd861b57bd69cc&w=740" alt="BlogImg" /></div>
      <div className="mx-auto ">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm divide-y-2 ">
          {blogs.map((blog, index) => (
            <div key={index} className="mt-6">
              <div className="flex items-center justify-between">
                <span className="text-sm">{blog.date}</span>
              </div>
              <div className="mt-3">
                <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{blog.title}</a>
                <p className="mt-2">{blog.content}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <a rel="noopener noreferrer" href="#" className="flex items-center">
                    <img src={blog.avatar} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full" />
                    <span className="hover:underline">{blog.author}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
