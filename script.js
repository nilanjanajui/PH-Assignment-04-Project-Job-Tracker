let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

const total = document.getElementById('total');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');
const jobCount = document.getElementById('jobCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('allCards');
const filterSection = document.getElementById('filtered-section');
const mainContainer = document.querySelector('main');
const emptyState = document.getElementById('emptyState');


function calculateCount() {
    const totalCards = allCardSection.querySelectorAll('.card').length;

    total.innerText = totalCards;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (currentStatus === 'interview-filter-btn') {
        jobCount.innerText = `${interviewList.length} of ${totalCards}`;
    }
    else if (currentStatus === 'rejected-filter-btn') {
        jobCount.innerText = `${rejectedList.length} of ${totalCards}`;
    }
    else {
        jobCount.innerText = totalCards;
    }

    if (totalCards === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

calculateCount();


function updateStatusBadge(statusEl, status) {
    statusEl.className = 'status inline-block px-3 py-1 rounded text-xs';

    if (status === 'INTERVIEW') {
        statusEl.classList.add('bg-green-100', 'text-green-600');
        statusEl.innerText = 'INTERVIEW';
    }
    else if (status === 'REJECTED') {
        statusEl.classList.add('bg-red-100', 'text-red-600');
        statusEl.innerText = 'REJECTED';
    }
    else {
        statusEl.classList.add('bg-gray-200', 'text-gray-600');
        statusEl.innerText = 'NOT APPLIED';
    }
}
