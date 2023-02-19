import styles from '@/styles/About.module.scss'

const FieldArticle:React.FC = () => {
  return (
    <div className={styles.bgfieldset}>
      <fieldset className={styles.field}>
        <legend className={styles.legend}>
          Mon Mojo !
        </legend>
        <label>
          <p className={styles.label}>
            Le code, la sécurité, la maintenabilité,
            les reusables components, la refactorisation,
            le nommage et le testing.
          </p>
        </label>
      </fieldset>
    </div>
  )
}
export default FieldArticle