import React from "react"
import PropTypes from "prop-types"
import styles from "./gallery-tabs.module.sass"

const GalleryTabs = ({ tabs, activeTab, setActiveTab }) => {
  const mappedTabs = tabs.map((tab, i) => (
    <button
      key={tab + i}
      className={styles[`tab${tab === activeTab ? "Active" : ""}`]}
      onClick={() => setActiveTab(tab)}
    >
      {tab}
    </button>
  ))

  return <section className={styles.tabs}>{mappedTabs}</section>
}

GalleryTabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
}

export default GalleryTabs
