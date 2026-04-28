'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './FAQ.module.css';
import { useModal } from '@/context/ModalContext';

const FAQS = [
  {
    q: 'What cards does Timon offer?',
    renderAnswer: () => <>Timon offers three cards: Voyager, Rove, and Ace. Available in physical and virtual, on Visa and Mastercard.</>,
  },
  {
    q: 'Are there spending limits on my card?',
    renderAnswer: () => <>Each card comes with its own limits. That&apos;s why we suggest getting a bundle. Own multiple cards, each with unique benefits, so you&apos;re never capped when it matters.</>,
  },
  {
    q: 'How do I unlock rewards and benefits?',
    renderAnswer: () => <>Fund $100 or more to get a free eSIM. Keep spending to unlock more gifts and perks along the way.</>,
  },
  {
    q: 'Can I use my Timon card with Apple Pay and Google Pay?',
    renderAnswer: () => <>Yes. Select Timon cards work seamlessly with Apple Pay and Google Pay for tap-to-pay anywhere.</>,
  },
  {
    q: 'What happens if my card is declined?',
    renderAnswer: () => <>With two networks, Visa and Mastercard, you always have a backup. If one doesn&apos;t work, the other will.</>,
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileSlideHeight, setMobileSlideHeight] = useState<number | null>(null);
  const [desktopAnswerHeight, setDesktopAnswerHeight] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const desktopAnswerRef = useRef<HTMLDivElement | null>(null);
  const { openModal } = useModal();

  const updateMobileSlideHeight = useCallback((swiper: SwiperType) => {
    const slide = swiper.slides[swiper.activeIndex];
    if (slide) setMobileSlideHeight(slide.getBoundingClientRect().height + 50);
  }, []);

  useEffect(() => {
    const measure = () => {
      const el = desktopAnswerRef.current;
      if (el) setDesktopAnswerHeight(el.getBoundingClientRect().height + 30);
    };
    measure();
    requestAnimationFrame(measure);
  }, [activeIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>

          {/* ── Left: question list ─────────────── */}
          <div className={styles.questions}>
            <h2 className={styles.heading}>Got questions for us?</h2>
            <div className={styles.list}>
              {FAQS.map((faq, i) => (
                <button
                  key={i}
                  className={styles.item}
                  data-active={i === activeIndex ? 'true' : 'false'}
                  onClick={() => setActiveIndex(i)}
                >
                  <span>{faq.q}</span>
                  {i === activeIndex && (
                    <span className={styles.arrow} aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Desktop: answer panel ───────────── */}
          <div className={styles.answerPanel}>
            <h3 className={styles.answerLabel}>We have answers</h3>
            <div
              className={styles.answerHeightWrapper}
              style={{ height: desktopAnswerHeight ?? 'auto', transition: 'height 0.3s ease' }}
            >
              <div ref={desktopAnswerRef} key={activeIndex} className={styles.answer}>
                {FAQS[activeIndex].renderAnswer()}
              </div>
            </div>
            <button type="button" className={styles.cta} onClick={openModal}>
              Get Timon Now →
            </button>
            <span className={styles.star} aria-hidden="true"><StarBurst /></span>
          </div>

          {/* ── Mobile: swiper panel ────────────── */}
          <div className={styles.answerPanelMobile}>
            <h3 className={styles.answerLabel}>We have answers</h3>
            <div
              className={styles.faqSwiperWrapper}
              style={{ height: mobileSlideHeight ?? 'auto', transition: 'height 0.3s ease' }}
            >
              <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={0}
                pagination={{ clickable: true }}
                className={styles.faqSwiper}
                onSwiper={swiper => {
                  swiperRef.current = swiper;
                  requestAnimationFrame(() => updateMobileSlideHeight(swiper));
                }}
                onSlideChangeTransitionEnd={updateMobileSlideHeight}
              >
                {FAQS.map((faq, i) => (
                  <SwiperSlide key={i} className={styles.faqSlide}>
                    <h4 className={styles.faqQuestion}>{faq.q}</h4>
                    <div className={styles.answer}>{faq.renderAnswer()}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <button type="button" className={styles.cta} onClick={openModal}>
              Get Timon Now
            </button>
            <span className={styles.star} aria-hidden="true"><StarBurst /></span>
          </div>

        </div>

      </div>
    </section>
  );
}

function StarBurst() {
  return (
    <svg width="76" height="80" viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path
        d="M50 0 L56.9 33.4 L85.4 14.6 L66.6 43.1 L100 50 L66.6 56.9 L85.4 85.4 L56.9 66.6 L50 100 L43.1 66.6 L14.6 85.4 L33.4 56.9 L0 50 L33.4 43.1 L14.6 14.6 L43.1 33.4 Z"
        fill="#ffe15a"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
