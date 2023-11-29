import css from './Statistics.module.css';
import PropTypes from "prop-types";

const Statistics = ({title, stats}) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat__list}>
        <li className={css.item}>
          <span className={css.label}>.docx</span>
          <span className={css.percentage}>{stats[0].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.mp3</span>
          <span className={css.percentage}>{stats[2].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.pdf</span>
          <span className={css.percentage}>{stats[1].percentage}%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.psd</span>
          <span className={css.percentage}>{stats[3].percentage}%</span>
        </li>
      </ul> 
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
};

export default Statistics;