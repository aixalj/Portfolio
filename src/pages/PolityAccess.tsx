import { FormEvent, useState } from 'react';
import { translations, Language } from '../translations';

const PolityAccess = () => {
  const language: Language =
    typeof window !== 'undefined' && localStorage.getItem('language') === 'es'
      ? 'es'
      : 'en';
  const t = translations[language];
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);
    setError('');

    try {
      const response = await fetch('/api/polity-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = (await response.json()) as { ok?: boolean; url?: string };

      if (response.ok && data.url) {
        setUrl(data.url);
        return;
      }

      setError(
        response.status === 500
          ? t.polityAccessUnavailable
          : t.polityAccessError
      );
    } catch {
      setError(t.polityAccessUnavailable);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className='relative w-full h-screen overflow-y-auto bg-white px-3 py-4'>
      <button
        onClick={() => {
          window.location.href = '/polity';
        }}
        className='text-sm font-hanken text-gray-500 hover:text-gray-800 cursor-pointer'
      >
        ← Back
      </button>

      <div className='flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center text-center'>
        <p className='text-sm font-hanken text-gray-900'>{t.polityLabel}</p>
        <div className='my-4 w-full max-w-sm border-t border-[#d9d9d9]' />

        <h3 className='text-lg font-hanken font-medium text-gray-800 mb-2 italic'>
          {t.viewSite}
        </h3>
        <p className='text-sm text-gray-600 leading-relaxed mb-6 max-w-sm'>
          {t.polityAccessPrompt}
        </p>

        {url ? (
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-gray-500 underline hover:text-gray-700'
          >
            {url}
          </a>
        ) : (
          <form onSubmit={onSubmit} className='w-full max-w-sm'>
            <label
              htmlFor='polity-password'
              className='text-sm font-hanken text-gray-800 mb-2 block'
            >
              {t.polityAccessPassword}
            </label>
            <input
              id='polity-password'
              type='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete='current-password'
              className='w-full border border-gray-300 rounded px-3 py-2 text-sm font-hanken text-gray-800 text-center mb-3'
            />
            <button
              type='submit'
              disabled={pending}
              className='text-sm font-hanken text-gray-600 underline hover:text-gray-800 cursor-pointer disabled:opacity-50'
            >
              {t.polityAccessSubmit}
            </button>
            {error ? (
              <p className='text-sm text-gray-800 mt-3'>{error}</p>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
};

export default PolityAccess;
