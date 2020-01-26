import React, { useState } from "react"
import PropTypes from "prop-types"

import GallerySelect from "@components/GallerySelect"
import GalleryTabs from "@components/GalleryTabs"
import GalleryImages from "@components/GalleryImages"

const Gallery = ({ images, types }) => {
  const [activeTab, setActiveTab] = useState("All")
  const filteredImages = images.filter(
    image =>
      activeTab === "All" ||
      image.type.toLowerCase() === activeTab.toLowerCase()
  )

  return (
    <section>
      <GallerySelect
        options={types}
        activeOption={activeTab}
        setActiveOption={setActiveTab}
      />
      <GalleryTabs
        tabs={types}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <GalleryImages category={activeTab} images={filteredImages} />
    </section>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  types: PropTypes.arrayOf(PropTypes.string),
}

Gallery.defaultProps = {
  images: [{}],
  types: [],
}

export default Gallery
