import React, { useEffect } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {

    function clickHandler(id,title) {
        if(likedCourses.includes(id)) {
            setLikedCourses(likedCourses.filter((courseId) => courseId !== id));
            toast.error(`Removed ${title} from favourites `);
        } else {
            setLikedCourses([...likedCourses,id]);
            toast.success(`Added ${title} to favourites`);
        }
    }

    

    

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-[80%] rounded-xl text-white px-3 py-2">
      <div className="relative">
        <img className="rounded-xl" src={course.image.url} />
        <div className="w-[30px] h-[30px] grid place-items-center bg-white rounded-full absolute right-2 bottom-1">
          <button onClick={()=>clickHandler(course.id,course.title)} >
          {
            likedCourses.includes(course.id) ? <FcLike/> : <FcLikePlaceholder/>
          }
          </button>
        </div>
      </div>

      <div>
        <h3>{course.title}</h3>
        <p className="mt-4">
            {
                course.description.length > 100 ? course.description.substr(0,150) + "..." : course.description
            }
        </p>
      </div>
    </div>
  );
};

export default Card;
