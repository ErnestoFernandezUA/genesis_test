export interface Course {
  containsLockedLessons: boolean;
  description: string;
  duration: number;
  id: string;
  launchDate: string;
  lessonsCount: number;
  meta: {
    courseVideoPreview: {
      duration: number;
      link: string;
      previewImageLink: string;
    },
    skills: string[];
    slug: string;
  },
  previewImageLink: string;
  rating: number;
  status: string;
  tags: string[];
  title: string;
  detailed?: CourseDetailed | null;
}

export interface CourseDetailed {
  containsLockedLessons: boolean;
  description: string;
  duration: number;
  id: string;
  launchDate: string;
  lessons: {
    duration:229
    id: string;
    link: string;
    meta: null;
    order: number;
    previewImageLink: string;
    status: string;
    title: string;
    type: string;
  }[];
  meta: {
    courseVideoPreview: {
      duration: number;
      link: string;
      previewImageLink: string;
    },
    skills: string[];
    slug: string;
    previewImageLink: string;
    rating: number;
    status: string;
    tags: string[];
    title: string;
  },
}
