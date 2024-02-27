import { features } from "../constants/index.js";
import styles, { layout } from "../styles";
import Button from "./Button.jsx";
import FeatureCard from "./FeatureCard.jsx";
// import { discount, robot } from "../assets";

export default function Buisness() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,
          <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button style="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature) => {
          return (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
              length={features.length}
            />
          );
        })}
      </div>
    </section>
  );
}
