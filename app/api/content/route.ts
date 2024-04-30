import { NextResponse } from 'next/server';

// Dummy data
const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    title: 'Sed do eiusmod',
    slug: 'sed-do-eiusmod',
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Duis aute irure',
    slug: 'duis-aute-irure',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Excepteur sint',
    slug: 'excepteur-sint',
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    title: 'Sed do eiusmod',
    slug: 'sed-do-eiusmod',
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    title: 'Duis aute irure',
    slug: 'duis-aute-irure',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    title: 'Excepteur sint',
    slug: 'excepteur-sint',
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
];

export async function GET() {
  return NextResponse.json(posts);
}
