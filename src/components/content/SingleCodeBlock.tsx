'use client';

import type { BundledLanguage } from '@/components/ui/shadcn-io/code-block';
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
} from '@/components/ui/shadcn-io/code-block';

export function SingleCodeBlock(props: { language: BundledLanguage; filename: string; code: string }) {
  const data = [{ language: props.language, filename: props.filename, code: props.code }];

  return (
    <CodeBlock data={data} defaultValue={props.language}>
      <CodeBlockHeader>
        <CodeBlockFiles>
          {(item) => (
            <CodeBlockFilename key={item.language} value={item.language}>
              {item.filename}
            </CodeBlockFilename>
          )}
        </CodeBlockFiles>
        <CodeBlockCopyButton
          onCopy={() => console.log('Copied code to clipboard')}
          onError={() => console.error('Failed to copy code to clipboard')}
        />
      </CodeBlockHeader>

      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem key={item.language} value={item.language}>
            <CodeBlockContent language={item.language as BundledLanguage}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  );
}