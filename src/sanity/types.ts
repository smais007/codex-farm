/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Subscriber = {
  _id: string;
  _type: "subscriber";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  email?: string;
};

export type Feedbacks = {
  _id: string;
  _type: "feedbacks";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  email?: string;
  message?: string;
  project?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "projects";
  };
};

export type WorkInquiry = {
  _id: string;
  _type: "workInquiry";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
  budget?: string;
};

export type Projects = {
  _id: string;
  _type: "projects";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  projectName?: string;
  slug?: Slug;
  projectTitle?: string;
  projectShortDescription?: string;
  projectLogo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  service?: "CMS" | "Ecommerce" | "LMS" | "Mobile Application" | "UI/UX Design" | "Social" | "Other";
  projectType?: "Open Source" | "Client Project";
  repositoryUrl?: string;
  liveLink?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  description?: string;
};

export type Posts = {
  _id: string;
  _type: "posts";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  shortDescription?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  content?: string;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  role?: string;
  position?: string;
  email?: string;
  discord?: string;
  github?: string;
  linkedin?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Markdown = string;

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Subscriber | Feedbacks | WorkInquiry | Projects | Posts | Slug | Author | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Markdown;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: POSTS_QUERY
// Query: *[_type == "posts" && defined(slug.current)] | order(_cratedAt desc){    _id,    _createdAt,    title,    "currentSlug": slug.current,    "image": image.asset->url ,    shortDescription,    content,    author -> {      name, role, "authorImage": image.asset->url, position    }}
export type POSTS_QUERYResult = Array<{
  _id: string;
  _createdAt: string;
  title: string | null;
  currentSlug: string | null;
  image: string | null;
  shortDescription: string | null;
  content: string | null;
  author: {
    name: string | null;
    role: string | null;
    authorImage: string | null;
    position: string | null;
  } | null;
}>;
// Variable: PROJECT_QUERY
// Query: *[_type == "projects" && defined(slug.current) ] | order(_cratedAt desc) {projectName,_createdAt,   "currentSlug": slug.current,  projectSlogun,  projectShortDescription,   "logo": projectLogo.asset->url,  service,    projectType,    repositoryUrl,    liveLink,    "feedbacks": *[_type == "feedbacks" && references(^._id)]{        name,        email,        message      }}
export type PROJECT_QUERYResult = Array<{
  projectName: string | null;
  _createdAt: string;
  currentSlug: string | null;
  projectSlogun: null;
  projectShortDescription: string | null;
  logo: string | null;
  service: "CMS" | "Ecommerce" | "LMS" | "Mobile Application" | "Other" | "Social" | "UI/UX Design" | null;
  projectType: "Client Project" | "Open Source" | null;
  repositoryUrl: string | null;
  liveLink: string | null;
  feedbacks: Array<{
    name: string | null;
    email: string | null;
    message: string | null;
  }>;
}>;
// Variable: PROJECT_SLUGS_QUERY
// Query: *[_type == "projects" && defined(slug.current)]{      "currentSlug": slug.current  }
export type PROJECT_SLUGS_QUERYResult = Array<{
  currentSlug: string | null;
}>;
// Variable: AUTHOR_QUERY
// Query: *[_type == "author"]{  name,    position,    role,    "userImage" : image.asset ->url,    email,    discord,    github,    linkedin}
export type AUTHOR_QUERYResult = Array<{
  name: string | null;
  position: string | null;
  role: string | null;
  userImage: string | null;
  email: string | null;
  discord: string | null;
  github: string | null;
  linkedin: string | null;
}>;
// Variable: FEEDBACK_QUERY
// Query: *[_type == "feedbacks"]{  name,  message}
export type FEEDBACK_QUERYResult = Array<{
  name: string | null;
  message: string | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"posts\" && defined(slug.current)] | order(_cratedAt desc){\n    _id,\n    _createdAt,\n    title,\n    \"currentSlug\": slug.current,\n    \"image\": image.asset->url ,\n    shortDescription,\n    content,\n    author -> {\n      name, role, \"authorImage\": image.asset->url, position\n    }\n}": POSTS_QUERYResult;
    "*[_type == \"projects\" && defined(slug.current) ] | order(_cratedAt desc) {\nprojectName,\n_createdAt,\n   \"currentSlug\": slug.current,\n  projectSlogun,\n  projectShortDescription,\n   \"logo\": projectLogo.asset->url,\n  service,\n    projectType,\n    repositoryUrl,\n    liveLink,\n    \"feedbacks\": *[_type == \"feedbacks\" && references(^._id)]{\n        name,\n        email,\n        message\n      }\n}": PROJECT_QUERYResult;
    "\n  *[_type == \"projects\" && defined(slug.current)]{\n      \"currentSlug\": slug.current\n  }\n": PROJECT_SLUGS_QUERYResult;
    "*[_type == \"author\"]{\n  name,\n    position,\n    role,\n    \"userImage\" : image.asset ->url,\n    email,\n    discord,\n    github,\n    linkedin\n}": AUTHOR_QUERYResult;
    "*[_type == \"feedbacks\"]{\n  name,\n  message\n}": FEEDBACK_QUERYResult;
  }
}
