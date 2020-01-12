import React, { useState } from "react"
import PropTypes from "prop-types"

import GallerySelect from "@components/GallerySelect"
import GalleryTabs from "@components/GalleryTabs"
import GalleryImages from "@components/GalleryImages"

const Gallery = ({ images }) => {
  const [activeTab, setActiveTab] = useState("All")
  const tabs = ["All", "Kitchen", "Bath", "Floor", "Fireplace", "Specialty"]
  const filteredImages = images.filter(
    image => activeTab === "All" || image.type === activeTab
  )

  return (
    <section>
      <GallerySelect
        options={tabs}
        activeOption={activeTab}
        setActiveOption={setActiveTab}
      />
      <GalleryTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <GalleryImages category={activeTab} images={filteredImages} />
    </section>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
}

Gallery.defaultProps = {
  images: [{}],
}

export default Gallery
