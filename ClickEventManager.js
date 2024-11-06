class ClickEventManager {
    constructor(delay) {
        this.queue = []; // 存储点击事件
        this.delay = delay; // 处理延迟
        this.timeoutId = null; // 用于存储定时器ID
    }

    // 点击事件处理
    handleClick(event) {
        // 将事件存入队列
        this.queue.push(event);

        // 清除之前的定时器
        clearTimeout(this.timeoutId);

        // 设置新的定时器
        this.timeoutId = setTimeout(() => {
            this.processQueue();
        }, this.delay);
    }

    // 处理队列中的事件
    processQueue() {
        // 处理队列中的最后一个事件
        const lastEvent = this.queue.pop();
        if (lastEvent) {
            console.log('Processing last click event:', lastEvent);
            // 在这里可以执行你的逻辑
        }

        // 清空队列
        this.queue = [];
    }
}

// 使用示例
const clickEventManager = new ClickEventManager(300); // 300ms 延迟

// 获取按钮元素
const button = document.getElementById('myButton');

// 注册点击事件
button.addEventListener('click', (event) => clickEventManager.handleClick(event));
