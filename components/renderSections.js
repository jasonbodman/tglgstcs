import React, {Fragment} from 'react'
import * as SectionComponents from './sections'
import capitalizeString from '../lib/capitalizeString'

function resolveSections(section) {
  // eslint-disable-next-line import/namespace
  const Section = SectionComponents[capitalizeString(section._type)]

  if (Section) {
    return Section
  }

  console.error('Cant find section', section) // eslint-disable-line no-console
  return null
}

function RenderSections(props) {
  const {sections} = props

  if (!sections) {
    console.error('No sections')
    return null
  }

  return (
    <Fragment>
      {sections.map((section, key) => {
        const SectionComponent = resolveSections(section)
        if (!SectionComponent) {
          return <div key={key}>Missing section {section._type}</div>
        }
        return <SectionComponent {...section} key={key} />
      })}
    </Fragment>
  )
}

export default RenderSections
