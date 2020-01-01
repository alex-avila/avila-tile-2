import React, { useState } from "react"
import GallerySelect from "@components/GallerySelect"
import GalleryTabs from "@components/GalleryTabs"
import GalleryImages from "@components/GalleryImages"

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All")
  const tabs = ["All", "Kitchen", "Bath", "Floor", "Fireplace", "Specialty"]

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
      <GalleryImages category={activeTab} />
    </section>
  )
}

export default Gallery
