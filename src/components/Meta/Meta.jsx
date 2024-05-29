import { Helmet } from "react-helmet-async"

const Meta = ({title, description, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
    title: 'Ryan Mitchell MP3 Offical',
    description: 'Shop Offical Ryan Mitchell MP3 Merchandise',
    keywords: 'music, mp3, merchandise, ryan mitchell mp3, ryan mitchell, ryan mitchell mp3 merchandise'
}

export default Meta