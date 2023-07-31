import { skillsImages } from '../components/ReactIcons';
import { astronaut, RectangleSkills } from '../images/skillsImg/export';

const Skills = () => {
  return (
    <section className=" flex min-h-screen pb-32   text-dark dark:text-light">
      <div className="flex flex-col md:ml-32 md:mt-32 md:w-[40vw] md:gap-5">
        <h3 className=" font-RobotoSlab text-9xl font-black  md:text-[220px]">
          Skills.
        </h3>
        <p></p>
        {/* <img className=" mt-16 w-36 font-bold" src={tagWeb} alt="" /> */}
        <section className="mx-auto mt-10 flex max-w-[80vw] flex-wrap items-center justify-around gap-10 md:mx-0 md:mt-0 md:w-auto md:flex-col md:items-start md:justify-start  md:gap-28">
          {skillsImages.map((skill) => {
            return (
              <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-start md:justify-start md:gap-4 ">
                <img className="w-20" src={skill.img} alt="" />
                <div className="flex flex-col items-center justify-center ">
                  <p className="font-RobotoSlab text-2xl font-bold md:text-lg">
                    {skill.title}
                  </p>
                  <p className="font-Roboto text-lg text-dark/75 dark:text-light/75">
                    +1 year
                  </p>
                  <p className="-mt-2 font-Roboto text-lg   text-dark/75 dark:text-light/75">
                    experience
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <div className=" relative mt-32 hidden  w-[60vw] md:block ">
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
