import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <body>
      <div>
      <img className='w-1/4 relative top-40 left-1/2 border-4 rounded-full drop-shadow-lg z-0' src="./src/assets/samprofile.jpg" alt="" />
      <h1 className="position-realative mt-0 ml-16 text-6xl text-orange-400 font-semibold  mb-2">Warmly welcome...</h1>
      <h2 className="position-relative text-2xl mt-0 ml-20 text-slate-50 font-semibold">Myanmar, Developer from Philippine.</h2>
      </div>
      
      <p className='position-relative font-mono text-justify text-slate-50 mx-52 text-xl mt-40 mb-28'> 🚀🙋‍♂️I am Samuel Htamu, a passionate and results-driven front-end developer with expertise in React.js and JavaScript. With a strong foundation in building dynamic, user-friendly, and responsive web applications, I specialize in creating seamless digital experiences. My proficiency in modern JavaScript frameworks, component-based architecture, and performance optimization enables me to deliver scalable solutions that meet user needs and business goals. Dedicated to continuous learning and innovation, I am eager to contribute to impactful projects and help bring ideas to life through exceptional web development.</p>
      <p className='text-center mb-8 text-white'>Here you can browse through our collection of pets and find the perfect pet for your needs.</p>
      <ProductList />
      <ProductList />
      <p className='my-32 mx-20 text-justify font-serif text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi eum accusantium, aspernatur modi ea officiis dolorem perspiciatis dicta inventore, numquam nihil aperiam impedit maxime voluptate velit facilis ad maiores!
      Ut quas deleniti natus harum, eligendi totam doloribus rem quo molestias quos similique quasi hic eum, eaque dignissimos facilis fugiat asperiores, tempore debitis. Quasi alias asperiores, numquam rem nostrum possimus?
      Eligendi maxime mollitia quia? Distinctio deleniti esse, mollitia culpa maiores dolores possimus quos dolorum repellendus itaque assumenda accusamus cum eveniet commodi magnam officiis. Et voluptatibus earum provident nostrum quae illo?
      Unde voluptatem ullam tempore voluptatibus praesentium laudantium beatae. Dolore minus vitae molestiae! Ex magni qui sunt iste et numquam exercitationem tempora. Nemo tempore nihil pariatur blanditiis, facere recusandae omnis repellat!
      Voluptate porro autem magnam ut, repellat eaque quae quis tempore, iste assumenda modi harum totam nam libero exercitationem esse. Impedit nesciunt nihil iusto vero ipsum tenetur eos, quasi quas fugiat.</p>
    </body>
  );
};

export default Home;
