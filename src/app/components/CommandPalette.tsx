'use client';

import * as React from 'react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Command } from 'lucide-react';
import { toast } from 'sonner';

// NOTE: Move CV_james_kok.pdf to /public/ (public/CV_james_kok.pdf) so it can be served directly.
// If you keep it in src/data it will NOT be publicly accessible at runtime.
const CV_URL = '/CV_james_kok.pdf';

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const copyCurrentUrl = async () => {
    const url = window.location.href;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const ta = document.createElement('textarea');
        ta.value = url;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      toast.success('Link copied', { description: url });
    } catch (e) {
      console.error('Copy failed', e);
      toast.error('Copy failed', { description: 'Could not copy the URL.' });
    } finally {
      setOpen(false);
    }
  };

  const openCV = () => {
    window.open(CV_URL, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="h-8 w-8 leading-none self-center"
      >
        <Command className="h-4 w-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Commands">
            <CommandItem onSelect={copyCurrentUrl}>🔗 Copy URL</CommandItem>
            <CommandItem onSelect={openCV}>📄 Open resume (cv)</CommandItem>
          </CommandGroup>

          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => go('/home')}>Home</CommandItem>
            <CommandItem onSelect={() => go('/about')}>About</CommandItem>
            <CommandItem onSelect={() => go('/projects')}>Projects</CommandItem>
          </CommandGroup>

          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
}