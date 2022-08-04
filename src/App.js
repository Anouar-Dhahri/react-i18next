import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import Cookies from 'js-cookie'
import reactLogo from './assets/react.png'

function App() {

  const [lang, setLang] = useState('');

  const languages = [
    {
      code: 'en',
      name: 'English',
    },
    {
      code: 'fr',
      name: 'Français',
    },
    {
      code: 'ar',
      name: 'العربية',
      dir: 'rtl',
    },
  ]

  const currentLanguageCode = Cookies.get('i18next') || lang || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
  }, [currentLanguage, t])

  const handleLanguage = () => {
    console.log(lang)
    i18next.changeLanguage(lang)
  }

  return (
    <div className='container'>
      <div className='header'>
        <h1>{t('title')}</h1>
        <select onChange={(e) => setLang(e.target.value)} onClick={handleLanguage}>
          {languages.map(({code, name }) => (
            <option key={code} value={code}> {name}</option>
          ))}
          
        </select>
      </div>
      <img src={reactLogo} alt='react' className='logo'/>
      <div className='txt'>
        <article>
          {t('p1')}
        </article>
        <article>
          {t('p2')}
        </article>
        <h2>{t('bnf')}</h2>
        <article>
        {t('bnft')}
        </article>

        <article>
          <h4>{t('bn1h4')} </h4>
          {t('bn1Exp')}
        </article>

        <article>
          <h4>{t('bn2h4')} </h4>
          {t('bn2Exp')}
        </article>

        <article>
          <h4>{t('bn3h4')} </h4>
          {t('bn3Exp')}
        </article>

        <article>
          <h4>{t('bn4h4')} </h4>
          {t('bn4Exp')}
        </article>

        <article>
          <h4>{t('bn5h4')} </h4>
          {t('bn5Exp')}
        </article>

      </div>
    </div>
  )
}

export default App