export type Topic = {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
};

export type Article = {
  id: string;
  topicId: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  medicalReviewer?: string;
  sources: string[];
  publishedDate: string;
  readTime: number;
};

export type Discussion = {
  id: string;
  topicId: string;
  title: string;
  author: string;
  isAnonymous: boolean;
  content: string;
  createdAt: string;
  upvotes: number;
  commentCount: number;
  tags: string[];
  isOpen: boolean;
};

export type Comment = {
  id: string;
  discussionId: string;
  author: string;
  isAnonymous: boolean;
  content: string;
  createdAt: string;
  upvotes: number;
};

export const topics: Topic[] = [
  {
    id: "fibroids",
    name: "Fibroids",
    description: "Understanding uterine fibroids, symptoms, and treatment options",
    color: "bg-purple-100 text-purple-700 border-purple-200",
    icon: "🌸",
  },
  {
    id: "endometriosis",
    name: "Endometriosis",
    description: "Support and information for those living with endometriosis",
    color: "bg-pink-100 text-pink-700 border-pink-200",
    icon: "🌺",
  },
  {
    id: "periods",
    name: "Periods",
    description: "Navigating menstrual health and period-related challenges",
    color: "bg-teal-100 text-teal-700 border-teal-200",
    icon: "🌿",
  },
];

export const articles: Article[] = [
  {
    id: "1",
    topicId: "fibroids",
    title: "Understanding Uterine Fibroids: A Comprehensive Guide",
    excerpt: "Learn about the different types of fibroids, their symptoms, and how they're diagnosed.",
    content: `
# Understanding Uterine Fibroids

Uterine fibroids are non-cancerous growths that develop in or around the uterus. They are incredibly common, affecting up to 80% of women by age 50.

## Types of Fibroids

There are several types of fibroids, classified by their location:

- **Intramural fibroids**: Grow within the muscular uterine wall
- **Subserosal fibroids**: Extend outside the uterus
- **Submucosal fibroids**: Bulge into the uterine cavity
- **Pedunculated fibroids**: Attached to the uterus by a stalk

## Common Symptoms

Many women with fibroids experience no symptoms at all. However, when symptoms do occur, they may include:

- Heavy menstrual bleeding
- Prolonged periods (lasting more than a week)
- Pelvic pressure or pain
- Frequent urination
- Difficulty emptying the bladder
- Constipation
- Backache or leg pains

## Diagnosis

Fibroids are typically diagnosed through:

- Pelvic examination
- Ultrasound
- MRI
- Hysterosonography
- Hysteroscopy

## Treatment Options

Treatment depends on the severity of symptoms, size and location of fibroids, and whether you wish to preserve fertility. Options include watchful waiting, medication, and various surgical procedures.

It's important to work closely with your healthcare provider to determine the best approach for your situation.
    `,
    author: "Dr. Sarah Mitchell",
    medicalReviewer: "Dr. Jennifer Thompson, MD, FACOG",
    sources: [
      "American College of Obstetricians and Gynecologists (ACOG)",
      "National Institutes of Health (NIH)",
      "Mayo Clinic - Uterine Fibroids Overview",
    ],
    publishedDate: "2026-02-15",
    readTime: 8,
  },
  {
    id: "2",
    topicId: "endometriosis",
    title: "Living with Endometriosis: Managing Pain and Symptoms",
    excerpt: "Practical strategies for managing endometriosis symptoms and improving quality of life.",
    content: `
# Living with Endometriosis

Endometriosis is a chronic condition where tissue similar to the lining of the uterus grows outside of it. This can cause significant pain and other symptoms that impact daily life.

## Understanding the Condition

Endometriosis affects approximately 1 in 10 women of reproductive age. The condition can cause:

- Painful periods (dysmenorrhea)
- Pain during intercourse
- Pain with bowel movements or urination
- Excessive bleeding
- Infertility
- Fatigue, nausea, and other systemic symptoms

## Pain Management Strategies

### Medical Approaches
- Pain medications (NSAIDs)
- Hormonal therapies
- Prescription pain management

### Lifestyle Modifications
- Heat therapy
- Regular exercise
- Stress reduction techniques
- Dietary changes
- Pelvic floor physical therapy

## Building Your Support System

Living with endometriosis can be isolating. It's important to:

- Find a healthcare provider who listens and believes you
- Connect with others who understand your experience
- Educate loved ones about the condition
- Practice self-compassion and patience

Remember, your pain is real and valid. Don't hesitate to advocate for yourself and seek the care you deserve.
    `,
    author: "Dr. Emily Chen",
    medicalReviewer: "Dr. Rachel Adams, MD, Endometriosis Specialist",
    sources: [
      "Endometriosis Foundation of America",
      "World Endometriosis Society",
      "The Lancet - Endometriosis Review 2024",
    ],
    publishedDate: "2026-02-10",
    readTime: 10,
  },
  {
    id: "3",
    topicId: "periods",
    title: "What's Normal? Understanding Your Menstrual Cycle",
    excerpt: "Learn what constitutes a healthy period and when to seek medical attention.",
    content: `
# Understanding Your Menstrual Cycle

Every woman's cycle is unique, but understanding what's typical can help you identify when something might be wrong.

## What's Considered Normal?

A "normal" menstrual cycle typically has these characteristics:

- **Cycle length**: 21-35 days (measured from the first day of one period to the first day of the next)
- **Period duration**: 2-7 days
- **Flow**: Moderate (changing a pad or tampon every 3-4 hours)
- **Pain**: Mild to moderate cramping

## Warning Signs to Watch For

While some variation is normal, these symptoms warrant a conversation with your healthcare provider:

- Periods lasting longer than 7 days
- Very heavy bleeding (soaking through a pad/tampon every hour)
- Severe pain that interferes with daily activities
- Bleeding between periods
- Irregular cycles (varying by more than 7-9 days)
- Missed periods (when not pregnant)

## Tracking Your Cycle

Consider keeping track of:
- First day of your period
- Duration and heaviness of flow
- Pain levels
- Other symptoms (mood changes, headaches, etc.)

This information can be invaluable when discussing your menstrual health with your doctor.

## When to Seek Help

Don't wait to seek medical attention if you're experiencing:
- Sudden changes in your cycle
- Severe pain
- Extremely heavy bleeding
- Any symptoms that concern you

Your menstrual health is an important indicator of your overall health. Trust your instincts and advocate for yourself.
    `,
    author: "Dr. Maria Rodriguez",
    medicalReviewer: "Dr. Lisa Patel, MD, FACOG",
    sources: [
      "American College of Obstetricians and Gynecologists",
      "Office on Women's Health - Menstrual Cycle Fact Sheet",
      "Cleveland Clinic - Menstruation Guidelines",
    ],
    publishedDate: "2026-02-20",
    readTime: 6,
  },
];

export const discussions: Discussion[] = [
  {
    id: "1",
    topicId: "fibroids",
    title: "Just diagnosed with fibroids - feeling overwhelmed",
    author: "Sarah_123",
    isAnonymous: false,
    content: "I was just diagnosed with multiple fibroids after years of heavy periods. My doctor mentioned several treatment options but I'm feeling really overwhelmed. Has anyone been through this? What questions should I be asking?",
    createdAt: "2026-02-24T10:30:00Z",
    upvotes: 24,
    commentCount: 18,
    tags: ["diagnosis", "treatment-options", "newly-diagnosed"],
    isOpen: true,
  },
  {
    id: "2",
    topicId: "fibroids",
    title: "Recovery after myomectomy - what to expect?",
    author: "Anonymous",
    isAnonymous: true,
    content: "I'm scheduled for a myomectomy in two weeks. For those who've had the procedure, what was your recovery like? How long before you felt back to normal?",
    createdAt: "2026-02-23T14:15:00Z",
    upvotes: 31,
    commentCount: 22,
    tags: ["surgery", "recovery", "myomectomy"],
    isOpen: true,
  },
  {
    id: "3",
    topicId: "endometriosis",
    title: "Endo pain during ovulation - does anyone else experience this?",
    author: "Anonymous",
    isAnonymous: true,
    content: "I've noticed that my endo pain gets significantly worse during ovulation. It's sometimes worse than my period pain. Is this common? How do you manage it?",
    createdAt: "2026-02-25T09:00:00Z",
    upvotes: 42,
    commentCount: 35,
    tags: ["pain-management", "ovulation", "symptoms"],
    isOpen: true,
  },
  {
    id: "4",
    topicId: "endometriosis",
    title: "Finally found a doctor who believes me!",
    author: "Hope_2026",
    isAnonymous: false,
    content: "After 5 years of being told my pain was 'normal' and 'just bad periods,' I finally found a doctor who took me seriously and diagnosed me with endometriosis. I'm crying tears of relief. To anyone still searching - don't give up!",
    createdAt: "2026-02-22T16:45:00Z",
    upvotes: 128,
    commentCount: 47,
    tags: ["diagnosis", "doctor-search", "support"],
    isOpen: true,
  },
  {
    id: "5",
    topicId: "periods",
    title: "Heavy periods affecting my work life - advice needed",
    author: "WorkingMom23",
    isAnonymous: false,
    content: "My periods have become so heavy that I'm worried about going to work. I've had to leave meetings and I'm constantly anxious. How do you all manage? What accommodations have you requested from your workplace?",
    createdAt: "2026-02-24T11:20:00Z",
    upvotes: 56,
    commentCount: 29,
    tags: ["heavy-bleeding", "work-life", "practical-tips"],
    isOpen: true,
  },
];

export const comments: Comment[] = [
  {
    id: "1",
    discussionId: "1",
    author: "Jennifer_K",
    isAnonymous: false,
    content: "I was in the same boat last year. My biggest piece of advice is to write down all your questions before your next appointment. Ask about the size and location of your fibroids, whether they're likely to grow, and all the treatment options available to you. Don't let anyone rush you into a decision!",
    createdAt: "2026-02-24T11:15:00Z",
    upvotes: 15,
  },
  {
    id: "2",
    discussionId: "1",
    author: "Anonymous",
    isAnonymous: true,
    content: "Take a deep breath - you're not alone! I had 3 fibroids when I was diagnosed. I ended up doing watchful waiting for 2 years before deciding on treatment. There's often no rush unless you're having severe symptoms. Take your time to research and make the decision that's right for you.",
    createdAt: "2026-02-24T12:30:00Z",
    upvotes: 12,
  },
  {
    id: "3",
    discussionId: "2",
    author: "RecoveryWarrior",
    isAnonymous: false,
    content: "I had my myomectomy 6 months ago. The first two weeks were tough - lots of rest needed. I was back to light activities after about 4 weeks, but it took a full 8 weeks before I felt truly like myself again. Everyone's different though! Listen to your body and don't push yourself too hard.",
    createdAt: "2026-02-23T15:00:00Z",
    upvotes: 18,
  },
  {
    id: "4",
    discussionId: "3",
    author: "EndoFighter",
    isAnonymous: false,
    content: "YES! Ovulation pain is very common with endo. For me, it's like a sharp, stabbing pain on one side. I use heat packs and take ibuprofen starting a day before I expect ovulation. Some people find that continuous birth control (to suppress ovulation) helps too.",
    createdAt: "2026-02-25T09:30:00Z",
    upvotes: 22,
  },
  {
    id: "5",
    discussionId: "4",
    author: "Anonymous",
    isAnonymous: true,
    content: "Congratulations! This is such a huge step. I'm so happy for you. Your pain matters and I'm glad someone finally listened. Wishing you all the best on your treatment journey! 💜",
    createdAt: "2026-02-22T17:00:00Z",
    upvotes: 35,
  },
];

export function getTopicById(id: string): Topic | undefined {
  return topics.find((t) => t.id === id);
}

export function getArticlesByTopic(topicId: string): Article[] {
  return articles.filter((a) => a.topicId === topicId);
}

export function getDiscussionsByTopic(topicId: string): Discussion[] {
  return discussions.filter((d) => d.topicId === topicId);
}

export function getArticleById(id: string): Article | undefined {
  return articles.find((a) => a.id === id);
}

export function getDiscussionById(id: string): Discussion | undefined {
  return discussions.find((d) => d.id === id);
}

export function getCommentsByDiscussion(discussionId: string): Comment[] {
  return comments.filter((c) => c.discussionId === discussionId);
}
