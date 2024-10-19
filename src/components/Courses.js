import React from 'react';
import coursesData from "../data/CoursesData";

function CourseItem({  id, name, description, url }) {
  return (
    <div key={id} className="col-md-4 mb-4">
      <div className='card h-100'>
      <img src={url} alt='yes' class='card-img-top'/>
      <div class="card-body"> 
      <h3 className='card-title'>{name}</h3>
      <p className='card-text'>{description}</p>
      <button className='btn btn-primary'>Know More</button>
      </div>
      </div>
    </div>
  );
}

function Courses() {
  return (
    <>
    <div class="container my-5">
            <div class="row">
                {coursesData.map(course => (
                  <CourseItem key={course.id} {...course} />
                )
                )}
            </div>
        </div>
    </>
  );
}

export default Courses;
