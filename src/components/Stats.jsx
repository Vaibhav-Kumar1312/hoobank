import styles from "../styles.js";
import { stats } from "../constants";

export default function Stats() {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => {
        return (
          <div
            key={stat.id}
            className={`flex-1 flex justify-start items-center flexx-row m-3`}
          >
            <h4 className="text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
              {stat.value}
            </h4>
            <p className="text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
}
