const Shimmer = ()=>{

  return (
     <div  className="shimmer-container">
     { [1,2,3,4,5,6,7,8,9,10].map((num) => (
       
            <div key={num} className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line short"></div>
        </div>
        
        
      ))
}
</div>
  );
};
   





export default Shimmer;