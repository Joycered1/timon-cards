import styles from './Testimonials.module.css';

const REVIEWS = [
  {
    initials: 'S',
    name: 'Sarah L.',
    role: 'Digital Nomad',
    quote:
      '"Timon completely changed how I manage my money abroad. No more surprise fees or terrible exchange rates. Just honest, real rates every time."',
  },
  {
    initials: 'J',
    name: 'James T.',
    role: 'Frequent Flyer',
    quote:
      '"The best travel card I\'ve used. I love that I can top up in any currency and spend instantly without worrying about conversion costs."',
  },
  {
    initials: 'A',
    name: 'Amira K.',
    role: 'Travel Blogger',
    quote:
      '"Honestly, the gifts are incredible. I funded my card and got a free eSIM. It made my trip to Japan so much smoother. Totally worth it."',
  },
  {
    initials: 'D',
    name: 'David W.',
    role: 'Expat',
    quote:
      '"Finally, honest rates without the hidden markups. Timon makes international payments feel like domestic ones — simple and transparent."',
  },
  {
    initials: 'E',
    name: 'Elena M.',
    role: 'Student',
    quote:
      '"I use Timon every day now, not just for travel. The interface is clean, top-ups are instant, and the rewards keep getting better."',
  },
  {
    initials: 'M',
    name: 'Marcus P.',
    role: 'Business Owner',
    quote:
      '"Managing international expenses used to be a headache. Timon handles it all — multiple currencies, real rates, and great rewards."',
  },
];

const Stars = () => (
  <div className={styles.stars} aria-label="5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="18" height="17" viewBox="0 0 18 17" fill="none" aria-hidden="true">
        <path d="M9 0L11.09 6.26H17.66L12.29 10.14L14.38 16.4L9 12.52L3.62 16.4L5.71 10.14L0.34 6.26H6.91L9 0Z" fill="#FDC700"/>
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Loved by travellers worldwide</h2>
        <p className={styles.subtitle}>
          Don't just take our word for it. Here is what our community has to say.
        </p>
      </div>

      <div className={styles.marqueeOuter}>
        <div className={styles.marqueeTrack}>
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <div key={i} className={styles.card}>
              <Stars />
              <p className={styles.quote}>{r.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{r.initials}</div>
                <div>
                  <p className={styles.name}>{r.name}</p>
                  <p className={styles.role}>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
