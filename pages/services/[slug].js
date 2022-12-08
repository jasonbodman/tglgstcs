import client from '../../client'
import PageHero from '../../components/pageHero'
import Hero from '../../components/hero'
import styles from '../../styles/service.module.css'


export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "service" && defined(slug.current)][].slug.current`)

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const servicePage = await client.fetch(`
  *[_type == "service" && slug.current == $slug][0]{
    description,
    tagline,
    title,
    "image": image{asset->{url}},
    content[] {
      ...,
    }
  }
  `, { slug })

  if (!servicePage) {
    return {
      notFound: true,
    }
  }


  return {
    props: {
      servicePage
    }
  }
}

const Post = ({servicePage}) => {
  
  return (
    <div>
      <PageHero hero={servicePage?.image.asset.url} title={servicePage?.title} tagline={servicePage?.tagline} />
      {/* <div className={styles.pageOverview}>{servicePage.description}</div> */}

    </div>

  )
}



export default Post