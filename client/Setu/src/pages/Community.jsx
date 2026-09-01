import React, { useState } from 'react';
import { Heart, MessageCircle, Send, ChevronDown, ChevronUp, BadgeCheck, Trash2 } from 'lucide-react';
import ThreeBackground from './background';
import Navbar from './navbar';

// ---------------------------------------------------------------------------
// Hardcoded seed data — foreign & Indian voices discussing Indian culture
// ---------------------------------------------------------------------------
const seedComments = [
  {
    id: 'c1',
    name: 'Meera Krishnan',
    location: 'Chennai, India',
    flag: '🇮🇳',
    initials: 'MK',
    verified: true,
    time: '2 days ago',
    text:
      "Watching the Kumbh Mela footage on this site gave me chills. My grandmother used to describe the Ganga aarti at Haridwar exactly like this — the diyas floating on the water at dusk. Some things really don't change across generations.",
    likes: 128,
    liked: false,
    owner: false,
    replies: [
      {
        id: 'r1',
        name: 'Tomás Herrera',
        location: 'Madrid, Spain',
        flag: '🇪🇸',
        initials: 'TH',
        verified: false,
        time: '2 days ago',
        text: "I visited Haridwar last year purely by chance and the aarti was the most moving thing I've seen while travelling. No photo does it justice.",
        likes: 34,
        liked: false,
        owner: false,
      },
      {
        id: 'r2',
        name: 'Meera Krishnan',
        location: 'Chennai, India',
        flag: '🇮🇳',
        initials: 'MK',
        verified: true,
        time: '1 day ago',
        text: "@Tomás that's beautiful to hear. It's even better once you understand why the diyas are set afloat — each one carries a wish downstream.",
        likes: 19,
        liked: false,
        owner: false,
      },
    ],
  },
  {
    id: 'c2',
    name: 'Aiko Tanaka',
    location: 'Kyoto, Japan',
    flag: '🇯🇵',
    initials: 'AT',
    verified: false,
    time: '3 days ago',
    text:
      'The section on Madhubani painting stopped me mid-scroll. The way the fish and lotus motifs repeat reminds me a lot of the symbolism in traditional Japanese textiles — different craft, same instinct to encode stories into pattern.',
    likes: 96,
    liked: true,
    owner: false,
    replies: [
      {
        id: 'r3',
        name: 'Rohan Deshmukh',
        location: 'Pune, India',
        flag: '🇮🇳',
        initials: 'RD',
        verified: false,
        time: '3 days ago',
        text: 'Never thought of the parallel with Japanese textile work but you\'re right — folk art everywhere seems to do this. Would love a joint exhibit someday.',
        likes: 22,
        liked: false,
        owner: false,
      },
    ],
  },
  {
    id: 'c3',
    name: 'Grace Owusu',
    location: 'Accra, Ghana',
    flag: '🇬🇭',
    initials: 'GO',
    verified: false,
    time: '4 days ago',
    text:
      "Learning that Onam and our own harvest festivals back home share so much — the communal feasting, the flower carpets, everyone contributing something small to make one big celebration. Culture really does rhyme across continents.",
    likes: 71,
    liked: false,
    owner: false,
    replies: [],
  },
  {
    id: 'c4',
    name: 'Vikram Chauhan',
    location: 'Jaipur, India',
    flag: '🇮🇳',
    initials: 'VC',
    verified: true,
    time: '5 days ago',
    text:
      "Grew up two streets from Hawa Mahal and even I learned something new from the Heritage Site section — didn't know the 953 jharokhas were designed so the royal women could watch street festivals unseen. Small details like this are why I keep coming back to this page.",
    likes: 154,
    liked: false,
    owner: false,
    replies: [
      {
        id: 'r4',
        name: 'Freya Lindqvist',
        location: 'Stockholm, Sweden',
        flag: '🇸🇪',
        initials: 'FL',
        verified: false,
        time: '4 days ago',
        text: 'That detail about the jharokhas is incredible. Architecture built around a social workaround — I need to see this in person now.',
        likes: 41,
        liked: false,
        owner: false,
      },
    ],
  },
  {
    id: 'c5',
    name: 'Daniel Okafor',
    location: 'Lagos, Nigeria',
    flag: '🇳🇬',
    initials: 'DO',
    verified: false,
    time: '6 days ago',
    text:
      "Been following the History section week by week. The way trade routes connected the Indian coast to East Africa centuries before colonization is barely taught anywhere outside specialist circles. More of this, please.",
    likes: 58,
    liked: false,
    owner: false,
    replies: [],
  },
  {
    id: 'c6',
    name: 'Sofia Bianchi',
    location: 'Florence, Italy',
    flag: '🇮🇹',
    initials: 'SB',
    verified: false,
    time: '6 days ago',
    text:
      "The Art section's breakdown of Tanjore painting technique — the gold foil, the gesso relief — reads almost exactly like how we describe Renaissance gilding here in Florence. Two traditions, thousands of miles apart, solving the same problem the same way.",
    likes: 63,
    liked: false,
    owner: false,
    replies: [
      {
        id: 'r5',
        name: 'Ananya Iyer',
        location: 'Thanjavur, India',
        flag: '🇮🇳',
        initials: 'AI',
        verified: true,
        time: '5 days ago',
        text: "I'm from Thanjavur and this made me smile — the gold work is still done by maybe a dozen families here who learned it from their fathers. Would love if the site profiled one of the workshops.",
        likes: 37,
        liked: false,
        owner: false,
      },
    ],
  },
  {
    id: 'c7',
    name: 'Marcus Webb',
    location: 'Melbourne, Australia',
    flag: '🇦🇺',
    initials: 'MW',
    verified: false,
    time: '7 days ago',
    text:
      "Came here after a work trip to Kerala and honestly this page explains the backwaters and the houseboat culture better than any guide I had in person. The bit about how the kettuvallam boats were originally rice barges, not tourist vessels, was new to me.",
    likes: 45,
    liked: false,
    owner: false,
    replies: [],
  },
  {
    id: 'c8',
    name: 'Priya Nair',
    location: 'Kochi, India',
    flag: '🇮🇳',
    initials: 'PN',
    verified: false,
    time: '1 week ago',
    text:
      "Seeing Theyyam featured properly, with context on the ritual and not just the makeup, means a lot. It's often reduced to 'colourful festival' in tourism content when it's actually a deeply spiritual performance tradition in north Kerala.",
    likes: 89,
    liked: false,
    owner: false,
    replies: [
      {
        id: 'r6',
        name: 'Lukas Weber',
        location: 'Berlin, Germany',
        flag: '🇩🇪',
        initials: 'LW',
        verified: false,
        time: '6 days ago',
        text: 'Agreed completely — I watched a Theyyam performance in Kannur and the depth of it took me by surprise. Glad this site treats it with the respect it deserves.',
        likes: 18,
        liked: false,
        owner: false,
      },
      {
        id: 'r7',
        name: 'Priya Nair',
        location: 'Kochi, India',
        flag: '🇮🇳',
        initials: 'PN',
        verified: false,
        time: '6 days ago',
        text: '@Lukas exactly — glad you got to witness it in person rather than just read about it.',
        likes: 9,
        liked: false,
        owner: false,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------
function Avatar({ initials }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-semibold tracking-wide text-white/90">
      {initials}
    </div>
  );
}

function CommentMeta({ name, location, flag, verified, time }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
      <span className="text-sm font-semibold text-white/90">{name}</span>
      {verified && <BadgeCheck size={14} className="text-orange-400" />}
      <span className="text-xs text-white/40">
        {flag} {location}
      </span>
      <span className="text-xs text-white/30">· {time}</span>
    </div>
  );
}

function LikeButton({ liked, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-xs text-white/60 transition-colors hover:text-white"
    >
      <Heart
        size={15}
        className={liked ? 'fill-orange-400 text-orange-400' : 'text-white/50'}
      />
      <span>{count}</span>
    </button>
  );
}

function Reply({ reply, onToggleLike, onDelete }) {
  return (
    <div className="flex gap-3 pt-4">
      <Avatar initials={reply.initials} />
      <div className="min-w-0 flex-1">
        <CommentMeta
          name={reply.name}
          location={reply.location}
          flag={reply.flag}
          verified={reply.verified}
          time={reply.time}
        />
        <p className="mt-1 text-sm leading-relaxed text-white/70">{reply.text}</p>
        <div className="mt-2 flex items-center gap-5">
          <LikeButton
            liked={reply.liked}
            count={reply.likes}
            onClick={() => onToggleLike(reply.id)}
          />
          {reply.owner && (
            <button
              onClick={() => onDelete(reply.id)}
              className="flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-red-400"
            >
              <Trash2 size={13} />
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Comment({ comment, onToggleLike, onToggleReplyLike, onAddReply, onDeleteComment, onDeleteReply }) {
  const [showReplies, setShowReplies] = useState(false);
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const submitReply = () => {
    if (!replyText.trim()) return;
    onAddReply(comment.id, replyText.trim());
    setReplyText('');
    setReplying(false);
    setShowReplies(true);
  };

  return (
    <div className="border-b border-white/10 py-6 first:pt-0 last:border-0">
      <div className="flex gap-3">
        <Avatar initials={comment.initials} />
        <div className="min-w-0 flex-1">
          <CommentMeta
            name={comment.name}
            location={comment.location}
            flag={comment.flag}
            verified={comment.verified}
            time={comment.time}
          />
          <p className="mt-1.5 text-sm leading-relaxed text-white/80">{comment.text}</p>

          <div className="mt-3 flex items-center gap-5">
            <LikeButton
              liked={comment.liked}
              count={comment.likes}
              onClick={() => onToggleLike(comment.id)}
            />
            <button
              onClick={() => setReplying((v) => !v)}
              className="flex items-center gap-1.5 text-xs text-white/60 transition-colors hover:text-white"
            >
              <MessageCircle size={15} />
              Reply
            </button>
            {comment.replies.length > 0 && (
              <button
                onClick={() => setShowReplies((v) => !v)}
                className="flex items-center gap-1 text-xs font-semibold tracking-wide text-orange-400/90 transition-colors hover:text-orange-300"
              >
                {showReplies ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
              </button>
            )}
            {comment.owner && (
              <button
                onClick={() => onDeleteComment(comment.id)}
                className="flex items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-red-400"
              >
                <Trash2 size={14} />
                Delete
              </button>
            )}
          </div>

          {replying && (
            <div className="mt-3 flex gap-2">
              <input
                autoFocus
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submitReply()}
                placeholder={`Reply to ${comment.name.split(' ')[0]}...`}
                className="flex-1 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white placeholder:text-white/30 focus:border-orange-400/50 focus:outline-none"
              />
              <button
                onClick={submitReply}
                className="shrink-0 rounded-full border border-white/10 bg-white px-4 text-xs font-semibold text-black transition-opacity hover:opacity-90"
              >
                Post
              </button>
            </div>
          )}

          {showReplies && comment.replies.length > 0 && (
            <div className="mt-1 divide-y divide-white/5 border-l border-white/10 pl-4">
              {comment.replies.map((reply) => (
                <Reply
                  key={reply.id}
                  reply={reply}
                  onToggleLike={(id) => onToggleReplyLike(comment.id, id)}
                  onDelete={(id) => onDeleteReply(comment.id, id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main section
// ---------------------------------------------------------------------------
function Community() {
  const [comments, setComments] = useState(seedComments);
  const [draft, setDraft] = useState('');

  const toggleLike = (id) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 } : c
      )
    );
  };

  const toggleReplyLike = (commentId, replyId) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id !== commentId
          ? c
          : {
              ...c,
              replies: c.replies.map((r) =>
                r.id === replyId
                  ? { ...r, liked: !r.liked, likes: r.liked ? r.likes - 1 : r.likes + 1 }
                  : r
              ),
            }
      )
    );
  };

  const addReply = (commentId, text) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id !== commentId
          ? c
          : {
              ...c,
              replies: [
                ...c.replies,
                {
                  id: `r-${Date.now()}`,
                  name: 'You',
                  location: 'Guest',
                  flag: '🌐',
                  initials: 'YO',
                  verified: false,
                  time: 'Just now',
                  text,
                  likes: 0,
                  liked: false,
                  owner: true,
                },
              ],
            }
      )
    );
  };

  const postComment = () => {
    if (!draft.trim()) return;
    setComments((prev) => [
      {
        id: `c-${Date.now()}`,
        name: 'You',
        location: 'Guest',
        flag: '🌐',
        initials: 'YO',
        verified: false,
        time: 'Just now',
        text: draft.trim(),
        likes: 0,
        liked: false,
        owner: true,
        replies: [],
      },
      ...prev,
    ]);
    setDraft('');
  };

  const deleteComment = (id) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const deleteReply = (commentId, replyId) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id !== commentId ? c : { ...c, replies: c.replies.filter((r) => r.id !== replyId) }
      )
    );
  };

  const totalVoices = comments.reduce((sum, c) => sum + 1 + c.replies.length, 0);

  return (
    <>
      <ThreeBackground />
      <Navbar />

      <main className="relative z-10 min-h-screen w-full px-6 pb-24 pt-40 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-white/70">
            {totalVoices} VOICES · ONE CONVERSATION
          </div>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Community</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
            Travellers, historians, and locals from every corner of the world sharing what
            India's culture and heritage means to them.
          </p>

          {/* Comment composer */}
          <div className="mt-10 flex gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur">
            <Avatar initials="YO" />
            <div className="flex-1">
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Share your thoughts on Indian culture and heritage..."
                rows={2}
                className="w-full resize-none bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <div className="mt-2 flex justify-end">
                <button
                  onClick={postComment}
                  disabled={!draft.trim()}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-2 text-xs font-semibold text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Comment
                  <Send size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Comment list */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 px-6 backdrop-blur">
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                onToggleLike={toggleLike}
                onToggleReplyLike={toggleReplyLike}
                onAddReply={addReply}
                onDeleteComment={deleteComment}
                onDeleteReply={deleteReply}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Community;