// console.log("hello first time");

// console.log("hello second time");

// console.log("hello third time");

// const myPosts = 
// [
//     {title: "Post one", body: "this the post one body"},
//     {title: "post two", body: "This is post two body"}
// ];

// console.log(myPosts)
//----------------------------------------------------------------------
// const myPosts = 
// [
//     {title: "Post one", body: "this the post one body"},
//     {title: "post two", body: "This is post two body"}
// ];

// function getPosts()
// {           //post is a place holder for all previous information. 
//             //could technically be anything.
//     myPosts.forEach( (post) => 
//     {
//         console.log(post);
//     });
// }

// getPosts();

//----------------------------------------------------------------------

// const myPosts = 
// [
//     {title: "Post one", body: "this the post one body"},
//     {title: "post two", body: "This is post two body"}
// ];

// function getPosts()
// {       
//     setTimeout( () =>
//     {
//         myPosts.forEach( (post) =>
//         {
//             console.log(post.title);
//         });
//     }, 10000 );
//      //^these are seconds
// }

// getPosts();

//----------------------------------------------------------------------

// const myPosts = 
// [
//     {title: "Post one", body: "this the post one body"},
//     {title: "post two", body: "This is post two body"}
// ];

// function getPosts()
// {       
//     setTimeout( () =>
//     {
//         myPosts.forEach( (post) =>
//         {
//             console.log(post.title);
//         });
//     }, 1000 );
//      //^these are seconds
// }

// function createPosts(post)
// {
//     setTimeout( () => 
//     {
//         myPosts.push(post);
//     }, 1000);
// }
// getPosts();
// createPosts({title: "post 3", body: "this is post 3 body"});
// getPosts();

//----------------------------------------------------------------------

// const myPosts = 
// [
//     {title: "Post one", body: "this the post one body"},
//     {title: "post two", body: "This is post two body"}
// ];

// function getPosts()
// {       
//     setTimeout( () =>
//     {
//         myPosts.forEach( (post) =>
//         {
//             console.log(post.title);
//         });
//     }, 1000 );
//      //^these are seconds
// }

// function createPosts(post, callback)
// {
//     setTimeout( () => 
//     {
//         myPosts.push(post);
//         //getposts
//         callback();
//     }, 5000);
// }

// createPosts({title: "post 3", body: "this is post 3 body"}, getPosts);
// getPosts();

//----------------------------------------------------------------------


// let name = "conor";

// console.log(`name: ${name}`);

// const callVar = () => 
// {
//     console.log(`my name is ${name}`);
// }

// callVar();

//-----------------------------------------------------------------------

// let name = "conor";

// const outerFunction = () =>
// {
//     let middleName = "David Edmund";
//     let surName = "Staniforth";

//     console.log(`Outer Function: ${name}`);
//     console.log(`Outer Function: ${middleName}`);
//     console.log(`Outer Function: ${surName}`);
// } 
// outerFunction();
//-----------------------------------------------------------------------
//BUBBLE ARRAY



// let bubbleSort = (inputArray) => 
// {
//     let length = inputArray.length;
//     let swapped; //swapped is initially false. during each iteration, 
//                  //if a value is swapped then swapped variable becomes true.
//     do 
//     {
//         swapped = false;
//         for (let i = [9, 2, 5, 3, 8]; i < length; i++)
//         {
//             if (inputArray[i] > inputArr[i+1])
//             {
//                 let timesMultiplied = inputArray[i];
//                 inputArray[i] = inputArray[i + 1];
//                 inputArray[i + 1] = timesMultiplied;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//       return inputArray;
// };
// console.log()

//-----------------------------------------------------------------------

