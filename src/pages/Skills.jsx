import { skillsImages } from '../components/ReactIcons';
import { astronaut, RectangleSkills, tagWeb } from '../images/skillsImg/export';

const Skills = () => {
  return (
    <section className=" flex min-h-screen pb-32  text-dark dark:text-light">
      <div className="ml-32 mt-32 flex w-[40vw] flex-col gap-5">
        <h3 className=" text-[220px] font-bold">Skills.</h3>
        <img className=" mt-16 w-36 font-bold" src={tagWeb} alt="" />
        <section className="flex flex-wrap items-center  gap-28">
          {skillsImages.map((skill) => {
            return (
              <div className="flex items-center gap-4 ">
                <img className="w-20" src={skill.img} alt="" />
                <div className=" ">
                  <p>{skill.title}</p>
                  <p className="my-2">+1 year</p>
                  <p>experience</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <div className=" relative  mt-32 w-[60vw] ">
        <img
          className="absolute right-0 h-full w-[50vw] "
          src={RectangleSkills}
          alt=""
        />
        <img
          className="w-30% absolute right-8 top-40 h-[70vh]"
          src={astronaut}
          alt=""
        />
      </div>
    </section>
  );
};

export default Skills;
