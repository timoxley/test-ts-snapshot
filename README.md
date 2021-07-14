# test-ts-snapshot

Example Repo showing very slow heap snapshot times when using ts-node.

These tests aren't exactly fair, since ts-node does need to do a lot
more work, but 15 seconds does seem like a long time to me, especially
when the snapshot itself is only ~10MB.

On Node 14, heap snapshots seem to take minutes, I never had the patience
to wait for it to complete.

```bash
> node -v
v16.5.0
> npm ci
> npm test
> test-ts-snapshot@1.0.0 test-node
> node index.mjs

node >>
Heap.20210714.095624.23039.0.001.heapsnapshot
node: 188.544ms
node <<

> test-ts-snapshot@1.0.0 test-ts
> ts-node index.mjs

ts-node >>
Heap.20210714.095640.23045.0.001.heapsnapshot
ts-node: 15.456s
ts-node <<
```

### Machine Specs

* macOS 11.4
* MacBook Pro (16 inch, 2019)
* 16GB 2.3 GHz 8-Core Intel Core i9
