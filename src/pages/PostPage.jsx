import React, {Suspense} from 'react'
import Loading from '../component/Loading';

// const FacebookPost = React.lazy(() => import('../component/Post'));
const FacebookPost = React.lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../component/Post'));
    }, 5000);
  })
);

const PostPage = () => {
  return (
    <div>
        <Suspense fallback={<Loading />}>
        <FacebookPost/>
        </Suspense> 
    </div>
  );
};

export default PostPage;