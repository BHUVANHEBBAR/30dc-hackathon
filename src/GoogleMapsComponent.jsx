// eslint-disable-next-line no-unused-vars
import React from "react";

const GoogleMapsComponent = () => {
  return (
    
    <>
    <section className="flex flex-col">
    <div className="block p-4"> 
    <h2 className="text-xl font-bold pr-4 pl-4">&#x1F4CC; Ikea Center,Bengaluru</h2>
      <iframe
      height={300}
      width={600}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ikea,Bengaluru+(Tiny%20Sprouts%20Academy%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        
      </iframe>
    </div>
    <div className="block p-4"> 
    <h2 className="text-xl font-bold pl-4 pr-4">&#x1F4CC; Bandra,Mumbai</h2>
      <iframe
      height={300}
      width={600}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bandra+(Tiny%20Sprouts%20Academy%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        
      </iframe>
    </div>
    <div className="block p-4"> 
    <h2 className="text-xl font-bold pl-4 pr-4">&#x1F4CC; Gurgaon,Delhi</h2>
      <iframe
      height={300}
      width={600}
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ikea,Bengaluru+(Tiny%20Sprouts%20Academy%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        
      </iframe>
    </div>
    
    </section>
    </>
    
  );
};

export default GoogleMapsComponent;
