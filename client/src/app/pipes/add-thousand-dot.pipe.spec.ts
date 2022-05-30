import { AddThousandDotPipe } from './add-thousand-dot.pipe';

describe('AddThousandDotPipe', () => {
  it('create an instance', () => {
    const pipe = new AddThousandDotPipe();
    expect(pipe).toBeTruthy();
  });
});
