
/**
 * Responsive 16:9 YouTube Video Player matching AGENTS.md & PRD requirements:
 * - Hosted within site with youtube-nocookie.com embed
 * - 16:9 aspect ratio container
 * - Privacy and security attributes
 */
export default function VideoPlayer({ videoId, title = 'Lesson Video' }) {
  if (!videoId) {
    return (
      <div className="w-full aspect-video bg-neutral-900 rounded-xl flex items-center justify-center text-neutral-400 p-8 text-center shadow-lg border border-neutral-800">
        <div>
          <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mx-auto mb-3 text-neutral-500">
            ▶
          </div>
          <p className="text-base font-medium text-neutral-300">Video Content Coming Soon</p>
          <p className="text-xs text-neutral-500 mt-1">Check the lesson notes below in the meantime.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black relative border border-neutral-800">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0 absolute inset-0"
      />
    </div>
  );
}
